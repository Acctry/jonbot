const pricelist = `
> PRICELIST PRICELIST VALORANT 
> STATUS : READY ✅
> Via Riot ID

◈ ━━━━━ *PRICELIST VALORANT POINT* ━━━━━ ◈

125 = Rp 14.400
420 = Rp 43.200
700 = Rp 76.800
1375 = Rp 143.900
2400 = Rp 239.800
4000 = Rp 383.600
8150 = Rp 767.200

proses 5-30 mnit

ID RIOT + TAG :
ORDER :
PROSES: 10-60 MENIT (MAX 24 JAM)
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['valorant']
handler.tags = ['topup']
handler.command = ['valorant','valo']

export default handler