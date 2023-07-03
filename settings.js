const fs = require('fs')
const chalk = require('chalk')

///Gantinya Ngerti Kan Lu Kan dah Gede

global.domain = "-" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.aipikey = ' ' //isi apikey Ai lu
global.owner = ['6285397904282']
global.nomerOwner = "6285397904282"
global.namabotnya = 'Anno'
global.namaownernya = 'Anno'
global.packname = '© Abzz||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0853-9790-4282\nYT : Anno'
global.sessionName = 'session'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.group = 'https://chat.whatsapp.com/CGsmeS8k3eF760jzueVHOH'
global.anticall = true
global.wm = "Subscribe YT *XieTy*"
global.mess = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
banned: '*Kamu Telah Dibanned Untuk Menggunakan Bot Ini Untuk Membuka Banned Chat Owner .Owner*',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Chat Owner Untuk Beli Premium Ketik .Owner',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./image/thumb.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})