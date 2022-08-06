const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')

switch(command) {
            case 'ehi': {
            KingmdWH.sendMessage(from, { react: { text: "🛡️", key: m.key }})
Kingbotehimenu = `🔥ᏦᏆΝᏀ ᏴϴͲ ᎬᎻᏆ ᏟϴᏞᏞᎬᏟͲᏆϴΝ🔥

🛑 ᴘᴏᴡᴇʀᴇᴅ ʙʏ :: κιиg οƒƒιϲιαℓ τєαм


❌ 𝙽𝙾 𝚂𝙿𝙰𝙼
❌ 𝙽𝙾 𝙳𝙳𝙾𝚂
❌ 𝙽𝙾 𝙷𝙰𝙲𝙺𝙸𝙽𝙶
❌ 𝙽𝙾 𝙲𝙰𝚁𝙳𝙸𝙽𝙶
✔️ 𝙽𝙾 𝚃𝙾𝚁𝚁𝙴𝙽𝚃
❌ 𝙽𝚘 𝙾𝚅𝙴𝚁 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳
❌ 𝙽𝙾 𝙼𝚄𝙻𝚃𝙸 𝙻𝙾𝙶𝙸𝙽

🍁 ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ,

⚡ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴
⚡ 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺
⚡ 𝚉𝙾𝙾𝙼
⚡ 𝚃𝙸𝙺𝚃𝙾𝙺
⚡ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿

⚡️ 𝙼𝙾𝙱𝙸𝚃𝙴𝙻 0
⚡️ 𝙰𝚁𝙸𝚃𝙴𝙻 0


   🔰 ᴀɴʏ ᴡʜᴀᴛꜱᴀᴘᴘ  - .wehi
   🔰 ᴀɴʏ ᴛɪᴋᴛᴏᴋ  - .ttehi
   🔰 ᴀɴʏ ᴛᴡɪᴛᴛᴇʀ  - .twehi
   🔰 ᴀɴʏ ꜰᴀᴄᴇʙᴏᴏᴋ - .fehi
   🔰 ᴀɴʏ ᴢᴏᴏᴍ - .zehi
   🔰 ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ - .yehi

   🔰 𝙰𝙸𝚁𝚃𝙴𝙻 0 - .a0ehi
   🔰 𝙼𝙾𝙱𝙸𝚃𝙴𝙻 0 - .m0ehi

   

🍁 ᴇʜɪ ᴄʀᴇᴀᴛᴇᴅ ʙʏ :: 𝐔𝐂𝐇𝐈𝐓𝐇𝐀


🔥 ᏢᎾᎳᎬᏒᎬᎠ bᎽ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 🔥`

        let buttons = [
             {buttonId: `kingehiuse`, buttonText: {displayText: '🕹️ ️HOW TO USE 🕹️'}, type: 1},
             {buttonId: `eapk`, buttonText: {displayText: '📁 GET INJECTOR APPS 📁'}, type: 1},
             {buttonId: `alive`, buttonText: {displayText: '🎲 BOT STATUS 🎲️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./src/ehilogo.jpg'),
                    caption: Kingbotehimenu,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                KingmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            
            break
            case '✦': {
            KingmdWH.sendMessage(from, { react: { text: "🛡️", key: m.key }})
            }
            
                } catch (err) {
        m.reply(util.format(err))
    }
    
    
    
    
 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})