fx_version 'cerulean'
game 'gta5'

name        'villas_polititablet'
description 'Politi Tablet NUI - vRP'
author      'Villas'
version     '1.0.3'

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
