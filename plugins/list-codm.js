const pricelist = `
> PRICELIST PRICELIST CALL OF DUTY MOBILE 
> STATUS : READY ✅
> Via OpenID

◈ ━━━━━ *PRICELIST CALL OF DUTY MOBILE* ━━━━━ ◈

•63  CP = Rp 9.700
•128 CP = Rp 19.400
•321 CP = Rp 48.500
•645 CP = Rp 97.000
•800 CP = Rp 116.400
•1373 CP = Rp 194.000
•2060 CP = Rp 291.000
•2750 CP = Rp 368.600
•3564 CP = Rp 485.000
•5619 CP = Rp 708.100
•7656 CP = Rp 970.000

⏳Proses 1-15 Menit
🧾NOTE⬇️
Bagaimana cara menemukan OpenID Call Of Duty Mobile?

1. Masuk ke game Call of Duty Mobile
2. Di menu utama,game Setting 
3. Kemudian tab Lainnya
4. Anda akan mendapatkan OpenID Anda
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['codm']
handler.tags = ['topup']
handler.command = ['codm','cod']

export default handler