const pricelist = `
> PRICELIST FREE FIRE 
> STATUS : READY ✅
> Via ID dan Server*

◈ ━━━━━ *Free Fire* ━━━━━ ◈

💎 5 = Rp 879
💎 10 = Rp 1.758
💎 15 = Rp 2.637
💎 20 = Rp 3.516
💎 25 = Rp 4.395
💎 30 = Rp 5.274
💎 50 = Rp 7.032
💎 55 = Rp 7.911
💎 60 = Rp 8.790
💎 70 = Rp 9.669
💎 75 = Rp 10.548
💎 80 = Rp 11.427
💎 90 = Rp 13.185
💎 100 = Rp 14.064
💎 120 = Rp 16.701
💎 130 = Rp 18.459
💎 140 = Rp 19.338
💎 145 = Rp 20.217
💎 150 = Rp 21.096
💎 160 = Rp 22.854
💎 190 = Rp 26.370
💎 200 = Rp 28.128
💎 210 = Rp 29.007
💎 250 = Rp 35.160
💎 280 = Rp 38.676
💎 300 = Rp 42.192
💎 355 = Rp 48.345
💎 360 = Rp 49.224
💎 375 = Rp 51.861
💎 405 = Rp 55.377
💎 425 = Rp 58.014
💎 475 = Rp 65.046
💎 500 = Rp 68.562
💎 510 = Rp 70.320
💎 515 = Rp 71.199
💎 520 = Rp 72.078
💎 545 = Rp 74.715
💎 565 = Rp 77.352
💎 600 = Rp 82.626
💎 635 = Rp 87.021
💎 645 = Rp 88.779
💎 655 = Rp 90.537
💎 720 = Rp 96.690
💎 725 = Rp 97.569
💎 740 = Rp 100.206
💎 770 = Rp 103.722
💎 790 = Rp 106.359
💎 800 = Rp 108.117
💎 860 = Rp 116.028
💎 930 = Rp 125.697
💎 1000 = Rp 135.366
💎 1050 = Rp 142.398
💎 1060 = Rp 144.156
💎 1075 = Rp 145.035
💎 1080 = Rp 145.914
💎 1200 = Rp 163.494
💎 1215 = Rp 164.373
💎 1300 = Rp 176.679
💎 1440 = Rp 193.380
💎 1450 = Rp 195.138
💎 1490 = Rp 200.412
💎 1510 = Rp 203.049
💎 1580 = Rp 212.718
💎 1795 = Rp 241.725
💎 1800 = Rp 242.604
💎 2000 = Rp 270.732
💎 2160 = Rp 290.070
💎 2180 = Rp 293.586
💎 2200 = Rp 297.102
💎 2210 = Rp 299.739
💎 2280 = Rp 309.408
💎 2355 = Rp 319.077
💎 2720 = Rp 367.422
💎 3640 = Rp 490.482
💎 3800 = Rp 511.578
💎 4000 = Rp 539.706
💎 4340 = Rp 583.656
💎 7290 = Rp 966.900

⋄ Member Mingguan 1x = Rp 29.300
⋄ Member Mingguan 2x = Rp 58.600
⋄ Member Mingguan 3x = Rp 87.900
⋄ Member Bulan 1x = Rp 87.900
⋄ Member Bulan 2x =  Rp 175.800
⋄ Member Bulan 3x = Rp 263.700
⋄ Level Up Pass = Rp 14.650
⋄ BP Card = Rp 43.950

(PECAHAN LAIN BISA DI COMBO AJA)
▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰ ▰
⏳ PROSES 1-10 MENIT

NOTE : HARGA SEWAKTU-WAKTU BISA BERUBAH
`

let handler = async (m, { conn, usedPrefix }) => {
     m.reply(pricelist)
}

handler.help = ['ff']
handler.tags = ['topup']
handler.command = /^(ff)$/i

export default handler