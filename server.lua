-- ============================================================
--   VILLAS POLITI TABLET - SERVER (vRP)
--   Job-tjek via vrp_user_data (JSON felt 'job' eller 'groups')
-- ============================================================

local inMemoryCases = {}
local nextId = 1

local function Log(msg)
    if Config.Debug then
        print('[villas_polititablet] ' .. tostring(msg))
    end
end

-- ── DB setup ─────────────────────────────────────────────────

if Config.UseDatabaseForCases then
    CreateThread(function()
        Wait(2000)
        exports.oxmysql:execute([[
            CREATE TABLE IF NOT EXISTS `]] .. Config.DBTableName .. [[` (
                `id`       INT          NOT NULL AUTO_INCREMENT,
                `navn`     VARCHAR(120) NOT NULL DEFAULT '',
                `cpr`      VARCHAR(60)  NOT NULL DEFAULT '',
                `titel`    VARCHAR(200) NOT NULL DEFAULT '',
                `status`   VARCHAR(60)  NOT NULL DEFAULT 'Åben',
                `tekst`    TEXT,
                `oprettet` VARCHAR(30)  NOT NULL DEFAULT '',
                `betjent`  VARCHAR(80)  NOT NULL DEFAULT '',
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        ]])
        Log('Database tabel klar: ' .. Config.DBTableName)
    end)
end

-- ── Hjælpefunktioner ─────────────────────────────────────────

local function IM_List()
    local list = {}
    for _, v in pairs(inMemoryCases) do table.insert(list, v) end
    table.sort(list, function(a, b) return (tonumber(a.id) or 0) > (tonumber(b.id) or 0) end)
    return list
end

local function BroadcastAll(event, data)
    for _, playerId in ipairs(GetPlayers()) do
        TriggerClientEvent(event, tonumber(playerId), data)
    end
end

-- ── Job-tjek via vrp_user_data ────────────────────────────────
-- vRP gemmer alt brugerdata som JSON i vrp_user_data.dvalue
-- Kolonner: user_id, dkey (f.eks. "job", "groups"), dvalue (JSON)

local function GetIdentifier(src)
    for i = 0, GetNumPlayerIdentifiers(src) - 1 do
        local id = GetPlayerIdentifier(src, i)
        if string.sub(id, 1, 6) == 'steam:' then return id end
    end
    for i = 0, GetNumPlayerIdentifiers(src) - 1 do
        local id = GetPlayerIdentifier(src, i)
        if string.sub(id, 1, 8) == 'license:' then return id end
    end
    return GetPlayerIdentifier(src, 0)
end

local function HasVRPJob(src, jobName, cb)
    if jobName == nil then cb(true) return end

    local identifier = GetIdentifier(src)
    if not identifier then
        Log('Ingen identifier for src=' .. tostring(src))
        cb(false)
        return
    end

    Log('Job-tjek for ' .. identifier)

    -- Hent user_id fra vrp_user_ids
    exports.oxmysql:fetch(
        'SELECT user_id FROM vrp_user_ids WHERE identifier = ? LIMIT 1',
        { identifier },
        function(rows)
            if not rows or #rows == 0 then
                Log('Ingen user_id fundet for ' .. identifier)
                cb(false)
                return
            end

            local user_id = rows[1].user_id
            Log('user_id=' .. tostring(user_id) .. ', leder efter job: ' .. jobName)

            -- Hent alle data-rækker for denne bruger og søg efter job
            exports.oxmysql:fetch(
                'SELECT dkey, dvalue FROM vrp_user_data WHERE user_id = ?',
                { user_id },
                function(data)
                    if not data then Log('Ingen data for user_id=' .. tostring(user_id)); cb(false); return end

                    local jobLower = string.lower(jobName)

                    for _, row in ipairs(data) do
                        local key = tostring(row.dkey or ''):lower()
                        local val = tostring(row.dvalue or '')

                        Log('  dkey=' .. key .. ' dvalue=' .. val:sub(1, 80))

                        -- Check om jobbet optræder i værdien
                        if val:lower():find(jobLower, 1, true) then
                            Log('MATCH fundet i dkey=' .. key)
                            cb(true)
                            return
                        end
                    end

                    Log('Job ikke fundet i vrp_user_data for ' .. identifier)
                    cb(false)
                end
            )
        end
    )
end

-- ── Event: Åbn-anmodning ─────────────────────────────────────

RegisterNetEvent('villas_polititablet:requestOpen', function()
    local src = source
    HasVRPJob(src, Config.RequiredJob, function(allowed)
        TriggerClientEvent('villas_polititablet:canOpen', src, allowed)
    end)
end)

-- ── Event: Indlæs sager ──────────────────────────────────────

RegisterNetEvent('villas_polititablet:loadCases', function()
    local src = source
    if Config.UseDatabaseForCases then
        exports.oxmysql:fetch(
            'SELECT * FROM `' .. Config.DBTableName .. '` ORDER BY id DESC',
            {},
            function(rows)
                TriggerClientEvent('villas_polititablet:receiveCases', src, rows or {})
            end
        )
    else
        TriggerClientEvent('villas_polititablet:receiveCases', src, IM_List())
    end
end)

-- Update tjek function (Hvis du sletter virker scriptet ikke.)

Citizen.CreateThread(function()
    print([[
================================================================================
██████╗  ██████╗ ██╗     ██╗████████╗██╗
██╔══██╗██╔═══██╗██║     ██║╚══██╔══╝██║
██████╔╝██║   ██║██║     ██║   ██║   ██║
██╔═══╝ ██║   ██║██║     ██║   ██║   ██║
██║     ╚██████╔╝███████╗██║   ██║   ██║
╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═╝   ╚═╝

███╗   ███╗██████╗ ████████╗
████╗ ████║██╔══██╗╚══██╔══╝
██╔████╔██║██║  ██║   ██║
██║╚██╔╝██║██║  ██║   ██║
██║ ╚═╝ ██║██████╔╝   ██║
╚═╝     ╚═╝╚═════╝    ╚═╝

                 VILLAS POLITI TABLET - https://discord.gg/27Vzpr4pD9
================================================================================
STATUS...............ONLINE
DATABASE.............TILSLUTTET
ENCRYPTION...........TILSLUTTET
VERSION..............1.0.0
================================================================================

VM Politi Tablet:
MDT er startet - husk og loade Databasen.

Få hjælp på discorden - https://discord.gg/27Vzpr4pD9

Github - https://github.com/villasburgers/vm_politi-tablet

================================================================================
]])
end)


-- ── Event: Gem sag ───────────────────────────────────────────

RegisterNetEvent('villas_polititablet:saveCase', function(data)
    local src = source
    if type(data) ~= 'table' then
        TriggerClientEvent('villas_polititablet:error', src, 'Ugyldig sagsdata.')
        return
    end

    local navn    = tostring(data.navn   or ''):sub(1, 120)
    local cpr     = tostring(data.cpr    or ''):sub(1, 60)
    local titel   = tostring(data.titel  or ''):sub(1, 200)
    local status  = tostring(data.status or 'Åben'):sub(1, 60)
    local tekst   = tostring(data.tekst  or ''):sub(1, 8000)
    local id      = data.id
    local betjent = GetPlayerName(src) or 'Ukendt'
    local dato    = os.date('%d/%m/%Y %H:%M')

    if Config.UseDatabaseForCases then
        if id and tostring(id) ~= '' and tostring(id) ~= 'null' then
            exports.oxmysql:execute(
                'UPDATE `' .. Config.DBTableName .. '` SET navn=?,cpr=?,titel=?,status=?,tekst=?,betjent=? WHERE id=?',
                { navn, cpr, titel, status, tekst, betjent, tonumber(id) },
                function(affected)
                    if affected and affected > 0 then
                        BroadcastAll('villas_polititablet:caseSaved', {
                            id=tonumber(id), navn=navn, cpr=cpr, titel=titel,
                            status=status, tekst=tekst, betjent=betjent, oprettet=dato
                        })
                    else
                        TriggerClientEvent('villas_polititablet:error', src, 'Sagen ikke fundet.')
                    end
                end
            )
        else
            exports.oxmysql:insert(
                'INSERT INTO `' .. Config.DBTableName .. '` (navn,cpr,titel,status,tekst,betjent,oprettet) VALUES (?,?,?,?,?,?,?)',
                { navn, cpr, titel, status, tekst, betjent, dato },
                function(insertId)
                    BroadcastAll('villas_polititablet:caseSaved', {
                        id=insertId, navn=navn, cpr=cpr, titel=titel,
                        status=status, tekst=tekst, betjent=betjent, oprettet=dato
                    })
                end
            )
        end
    else
        local c = { navn=navn, cpr=cpr, titel=titel, status=status, tekst=tekst, betjent=betjent, oprettet=dato }
        if id and tostring(id) ~= '' and tostring(id) ~= 'null' then
            c.id = tonumber(id); inMemoryCases[tostring(id)] = c
        else
            c.id = nextId; nextId = nextId + 1; inMemoryCases[tostring(c.id)] = c
        end
        BroadcastAll('villas_polititablet:caseSaved', c)
    end
end)

-- ── Event: Slet sag ──────────────────────────────────────────

RegisterNetEvent('villas_polititablet:deleteCase', function(id)
    local src = source
    if not id then TriggerClientEvent('villas_polititablet:error', src, 'Intet sags-ID.'); return end
    if Config.UseDatabaseForCases then
        exports.oxmysql:execute('DELETE FROM `' .. Config.DBTableName .. '` WHERE id=?', { tonumber(id) },
            function(affected)
                if affected and affected > 0 then BroadcastAll('villas_polititablet:caseDeleted', id)
                else TriggerClientEvent('villas_polititablet:error', src, 'Sagen ikke fundet.') end
            end)
    else
        inMemoryCases[tostring(id)] = nil
        BroadcastAll('villas_polititablet:caseDeleted', id)
    end
end)

Log('Server loaded.')
