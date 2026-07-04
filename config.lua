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
--   VILLAS POLITI TABLET - https://discord.gg/27Vzpr4pD9
-- ============================================================

Config = {}

Config.Command     = 'tablet' -- Kommando for at åbne tabletten (fx: /tablet)
Config.RequiredJob = 'Politi'   -- Skal matche præcis det der står i vrp/cfg/groups.lua

Config.NotificationType = 'native' -- Notification type: 'native' or 'mythic'
Config.NoAccessMessage  = 'Du er ikke en politibetjent!' -- Message when a player without the required job tries to open the tablet

Config.UseDatabaseForCases = true -- If true, cases will be stored in a database table. If false, cases will be stored in a local file, which will be created in the resource folder. (Not recommended for production use)
Config.DBTableName         = 'politi_sager' -- The name of the database table where cases will be stored. Make sure to create this table in your database if you set UseDatabaseForCases to true.

Config.Debug = false   -- Sæt til true for at aktivere debug mode, som vil vise ekstra information i server konsollen.