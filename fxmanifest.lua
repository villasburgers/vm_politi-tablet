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


fx_version 'cerulean'
game 'gta5'

name        'VM_Politi-Tablet'
description 'Politi Tablet til vRP lavet af Villas'
author      'VM_Store'
version     '1.0.0'

lua54 'yes'

shared_scripts {
    'config.lua'
}

client_scripts {
    'client.lua'
}

server_scripts {
    'server.lua'
}

ui_page 'html/index.html'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/data.js'
}

