let handler =  m => m.reply(`
╭─「 Main 」
│ • /menu
│ • /help
│ • /?
╰────

╭─「 Database 」
│ • /addmsg <teks>
│ • /delmsg <teks>
│ • /savefile <teks>
│ • /getfile <teks>
╰────

─「 Group 」
│ • /join <link group> <durasi> *hari
│ • /enable <option>
│ • /disable <option>
│ • /infogrup
│ • /linkgroup
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
│ • /stiker (caption|reply media)
│ • /math <mode>
╰────


_*THIS BOT WAS DEVELOPED BY @MAULUD_AL FOR EDUCATIONAL PURPOSE*_
`.trim()) // Tambah sendiri kalo mau
handler.help = ['admin']
handler.tags = ['info']
handler.command = /^(menu|help|\?)$/i

export default handler
