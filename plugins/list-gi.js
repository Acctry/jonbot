const pricelist = `
> PRICELIST PRICELIST GENSHIN IMPACT 
> STATUS : READY ✅
> Via UID & SERVER

◈ ━━━━━ *PRICELIST GENSHIN IMPACT* ━━━━━ ◈

🔮 60   = Rp 12.000
🔮 330  = Rp 58.500
🔮 1090 = Rp 175.000
🔮 2240 = Rp 378.000
🔮 3880 = Rp 580.000
🔮 8080  = Rp 1.175.000

Blessing = Rp 58.500

PROSES: 1-15 MENIT
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['genshin']
handler.tags = ['topup']
handler.command = ['genshin','gi']

export default handler