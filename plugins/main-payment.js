const payment = `
MENU PEMBAYARAN�
WIJAYA STORE

PEMBAYARAN VIA BANK: 
🏧MANDIRI  : 1830004722137
🏧BRI  : 528201034494539
(ASIMA ANAVARO BR MARBUN BJR)

SEMUA BANK ATAS NAMA
(JHON HAD WIJAYA)

‼️KECUALI BRI‼️

PEMBAYARAN VIA DANA
📱DANA 2 : 08887245861
( JHON HAD WIJAYA )
• Transfer dari dana ke dana +Rp100
• Transfer dari bank ke dana +Rp500

📱GOPAY 1 : 08887245861
( JHON HAD WIJAYA )

📱SHOPEEPAY 1 : 08887245861
( JHON HAD WIJAYA )
(VIA BANK KE SHOPE WAJIB +1K)

▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
Noted :
💸TRANSFER HANYA KE PAYMENT YANG TERTERA DI ATAS YA
Order tidak akan di proses apabila tidak menyertakan bukti transfer. Terimakasih
`
function handler(m) {
    m.reply(payment)
  }
  
  handler.help = ['payment']
  handler.tags = ['info']
  handler.command = ['pay','payment','bayar','rek'] 
  
  export default handler
  