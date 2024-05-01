const pricelist = `
> PRICELIST PRICELIST FC MOBILE 
> STATUS : READY ✅
> Via ID

◈ ━━━━━ *PRICELIST FC MOBILE* ━━━━━ ◈

🔮 40+8   = Rp 6.700
🔮 100+20 = Rp 16.315
🔮 520+104 = Rp 75.331
🔮 1020+214 = Rp 141.790
🔮 2200+440 = Rp 295.732
🔮 5750+1150  = Rp 805.000

PROSES USER ID  ✅
PROSES: 1-15 MENIT
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['fc']
handler.tags = ['topup']
handler.command = /^(fc)$/i

export default handler