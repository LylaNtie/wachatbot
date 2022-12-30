let handler =  m => m.reply(`
Hai!

Untuk menampilkan menu silakan ketik
*/menu*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['admin']
handler.tags = ['info']
handler.command = /^halo$/i

export default handler
