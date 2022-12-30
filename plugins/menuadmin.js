let handler =  m => m.reply(`
╭─「 Main 」
│ • /menu
│ • /help
│ • /?
╰────

╭─「 Game 」
│ • /math <mode>
╰────

╭─「 Sticker 」
│ • /stiker (caption|reply media)
╰────

─「 Group 」
│ • /join <link group> <durasi> *hari
│ • /enable <option>
│ • /disable <option>
│ • /infogrup
│ • /linkgroup
│ • /leavegc
│ • /leavegroup
│ • /tagall
╰────

─「 Tools 」
│ • /ping
│ • /speed
│ • /del
│ • /delete
│ • /qr <teks>
│ • /qrcode <teks>
│ • /readviewonce <reply pesan>
│ • /tts <lang> <teks>
╰────

╭─「 Database 」
│ • /addmsg <teks>
│ • /delmsg <teks>
│ • /listmsg
│ • /savefile <teks>
│ • /getfile <teks>
╰────

_*THIS BOT WAS DEVELOPED BY @MAULUD_AL FOR EDUCATIONAL PURPOSE*_

_This is menu for admin, please contact the developer 
if error occurred. type /creator_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['admin']
handler.tags = ['info']
handler.command = /^(menuadmin)$/i
handler.owner = true

export default handler
