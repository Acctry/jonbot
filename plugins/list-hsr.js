const pricelist = `
> PRICELIST HONKAI : STAR RAIL 
> STATUS : READY ✅
> Via ID dan Server*

◈ ━━━━━ *HONKAI : STAR RAIL* ━━━━━ ◈

60 Oneiric Shard = Rp 14.500
330 Oneiric Shard = Rp 58.600
1090 Oneiric Shard = Rp 176.400
2240 Oneiric Shard = Rp 382.300
3880 Oneiric Shard = Rp 588.300
8080 Oneiric Shard = Rp 1.176.900
Express Supply Pass = Rp 58.600

Proses 1-15 Menit
FORMAT
ID:
SERVER: (Contoh Asia,America,Europe)
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['hsr']
handler.tags = ['topup']
handler.command = ['hsr', 'honkai']

export default handler