-- ============================================================
--   VILLAS POLITI TABLET - CONFIG
-- ============================================================

Config = {}

Config.Command     = 'tablet'
Config.RequiredJob = 'Politi'   -- Skal matche præcis det der står i vrp_user_data

Config.NotificationType = 'native'
Config.NoAccessMessage  = 'Du er ikke en politibetjent!'

Config.UseDatabaseForCases = true
Config.DBTableName         = 'politi_sager'

Config.Debug = false   -- Sæt til false når det virker
