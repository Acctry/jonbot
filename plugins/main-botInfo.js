import speed from 'performance-now'
import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, 'd : ', h, 'h : ', m, 'm '].map(v => v.toString().padStart(2, 0)).join('')
}
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime)
  let timestamp = speed();
  let latensi = speed() - timestamp;
  
let infobt = `
◈ ━━━━━ *Info Bot* ━━━━━ ◈

 *≡ Wijaya Store Bot*
 Runtime : ( ${uptime})
 Library : Baileys

 *≡ S E R V E R* :
🟢 Kecepatan : ${latensi.toFixed(4)} _ms_
🟠 RAM : ${format(totalmem() - freemem())} / ${format(totalmem())}
🔵 Free RAM : ${format(freemem())}

*≡  Nodejs Memory Use* :
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')} : ${format(used[key])}`).join('\n') + '```'}
`
m.reply(infobt)

}
handler.help = ['info']
handler.tags = []
handler.command = ['info', 'infobot', 'botinfo']

export default handler


// *STATE*
// ▢ *${groupsIn.length}* Group chats
// ▢ *${groupsIn.length}* United Groups
// ▢ *${groupsIn.length - groupsIn.length}* Abandoned groups
// ▢ *${chats.length - groupsIn.length}* Private chats
// ▢ *${chats.length}* Total Chats

// *≡ OWNER*
//   *Dinosayus*
// ▢ Instagram :
//   • -
// ▢ WhatsApp :
//   • 083- 
// ▢ GitHub :
//   •Source : -
// ▢ Telegram : 
// ▢ YouTube : 
//   • -