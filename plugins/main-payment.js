const payment = `
💰ℙ𝔼𝕄𝔹𝔸𝕐𝔸ℝ𝔸ℕ

💳BCA: 
🧡SHOPEE PAY: 
💙DANA: 
💛SEABANK: 
🤍BRI: 
🩵MANDIRI: 

📌𝔸𝕋𝔸𝕊 ℕ𝔸𝕄𝔸: JOHNY WIJAYA
`
function handler(m) {
    m.reply(payment)
  }
  
  handler.help = ['payment']
  handler.tags = ['info']
  handler.command = ['pay','payment','bayar','rek'] 
  
  export default handler
  