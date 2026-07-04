--[[
██╗   ██╗███╗   ███╗    ███████╗████████╗ ██████╗ ██████╗ ███████╗
██║   ██║████╗ ████║    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██╔████╔██║    ███████╗   ██║   ██║   ██║██████╔╝█████╗
╚██╗ ██╔╝██║╚██╔╝██║    ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝
 ╚████╔╝ ██║ ╚═╝ ██║    ███████║   ██║   ╚██████╔╝██║  ██║███████╗
  ╚═══╝  ╚═╝     ╚═╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝

                    VM Politi Tablet
                Made by villas.burgers.alt
                     discord.gg/27Vzpr4pD9
]]

-- ============================================================
--   VILLAS POLITI TABLET https://discord.gg/27Vzpr4pD9
-- ============================================================

local isOpen = false

local function Notify(msg)
    if Config.NotificationType == 'native' then
        SetNotificationTextEntry('STRING')
        AddTextComponentString(msg)
        DrawNotification(false, false)
    elseif Config.NotificationType == 'chat' then
        TriggerEvent('chat:addMessage', { args = { '[Politi Tablet]', msg } })
    end
end

local function OpenTablet()
    -- Job-tjek sker på serveren
    TriggerServerEvent('villas_polititablet:requestOpen')
end

local function CloseTablet()
    isOpen = false
    SetNuiFocus(false, false)
    SendNUIMessage({ action = 'close' })
end

RegisterCommand(Config.Command, function()
    if isOpen then CloseTablet() else OpenTablet() end
end, false)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if isOpen and IsControlJustReleased(0, 200) then
            CloseTablet()
        end
    end
end)

-- Server svarer om adgang er givet
RegisterNetEvent('villas_polititablet:canOpen', function(allowed)
    if not allowed then
        Notify(Config.NoAccessMessage)
        return
    end
    isOpen = true
    SetNuiFocus(true, true)
    SendNUIMessage({ action = 'open' })
    TriggerServerEvent('villas_polititablet:loadCases')
end)

RegisterNUICallback('closeTablet', function(data, cb)
    CloseTablet()
    cb('ok')
end)

RegisterNUICallback('saveCase', function(data, cb)
    TriggerServerEvent('villas_polititablet:saveCase', data)
    cb('ok')
end)

RegisterNUICallback('deleteCase', function(data, cb)
    TriggerServerEvent('villas_polititablet:deleteCase', data.id)
    cb('ok')
end)

RegisterNUICallback('loadCases', function(data, cb)
    TriggerServerEvent('villas_polititablet:loadCases')
    cb('ok')
end)

RegisterNetEvent('villas_polititablet:receiveCases', function(cases)
    SendNUIMessage({ action = 'loadCases', cases = cases })
end)

RegisterNetEvent('villas_polititablet:caseSaved', function(caseData)
    SendNUIMessage({ action = 'caseSaved', case = caseData })
end)

RegisterNetEvent('villas_polititablet:caseDeleted', function(caseId)
    SendNUIMessage({ action = 'caseDeleted', id = caseId })
end)

RegisterNetEvent('villas_polititablet:error', function(msg)
    Notify('[Tablet] ' .. tostring(msg))
end)
