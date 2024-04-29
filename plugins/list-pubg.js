const pricelist = `
> PRICELIST UC PUBG IND 
> STATUS : READY ✅
> Via ID dan Server*

◈ *PAKET A UC REGION INDO🇮🇩* ◈
💵 30 UC = Rp 7.292 
💵 60 UC = Rp 13.583 
💵 90 UC = Rp 19.875 
💵 120 UC = Rp 27.166 
💵 150 UC = Rp 33.458 
💵 180 UC = Rp 39.750 
💵 210 UC = Rp 46.041 
💵 240 UC = Rp 52.333 
💵 270 UC = Rp 58.624 
💵 325 UC = Rp 64.916 
💵 385 UC = Rp 77.499 
💵 445 UC = Rp 90.082 
💵 660 UC = Rp 128.832 
💵 720 UC = Rp 141.414 
💵 840 UC = Rp 167.582 
💵 985 UC = Rp 194.748 
💵 1.015 UC = Rp 200.040 
💵 1.320 UC = Rp 256.664 
💵 1.380 UC = Rp 263.956 
💵 1.410 UC = Rp 275.539 
💵 1.440 UC = Rp 282.830 
💵 1.500 UC = Rp 296.414 
💵 1.560 UC = Rp 307.997 
💵 1.800 UC = Rp 321.580 
💵 1.860 UC = Rp 333.163 
💵 1.920 UC = Rp 346.746 
💵 1.980 UC = Rp 362.330 
💵 2.125 UC = Rp 387.496 
💵 2.460 UC = Rp 450.412 
💵 2.785 UC = Rp 513.328 
💵 3.120 UC = Rp 576.244 
💵 3.850 UC = Rp 639.160 
💵 4.000 UC = Rp 680.618 
💵 4.030 UC = Rp 685.910 
💵 4.175 UC = Rp 705.076 
💵 4.510 UC = Rp 774.992 
💵 4.835 UC = Rp 827.908 
💵 5.170 UC = Rp 900.824 
💵 5.650 UC = Rp 963.740 
💵 6.310 UC = Rp 1.089.572 
💵 6.635 UC = Rp 1.152.488 
💵 6.970 UC = Rp 1.215.404 
💵 8.100 UC = Rp 1.278.320 
💵 8.425 UC = Rp 1.341.236 
💵 8.760 UC = Rp 1.404.152 
💵 9.900 UC = Rp 1.592.900 
💵 10.020 UC = Rp 1.610.066 
💵 10.560 UC = Rp 1.710.732 
💵 11.950 UC = Rp 1.897.480 
💵 13.750 UC = Rp 2.222.060 
💵 14.410 UC = Rp 2.347.892 
💵 15.070 UC = Rp 2.473.724 
💵 16.200 UC = Rp 2.546.640 
💵 18.000 UC = Rp 2.871.220 
💵 19.015 UC = Rp 3.056.260 
💵 20.050 UC = Rp 3.175.800 
💵 24.300 UC = Rp 3.794.960 
💵 32.400 UC = Rp 5.053.280 
💵 40.500 UC = Rp 6.310.600
#PECAHAN LAIN COMBOIN AJA
▰▰▰▰▰▰▰▰▰▰▰▰▰▰
⏳PROSES: 1-15 MENIT
JIKA EVENT/RAME 10-60 MENIT
NOTE:UNTUK HARGA BISA BERUBAH 
`

let handler = async (m, { conn, usedPrefix }) => {
 m.reply(pricelist)
}

handler.help = ['pubg']
handler.tags = ['topup']
handler.command = /^(pubg)$/i

export default handler