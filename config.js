const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923051391007'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "923051391007"
global.devs = '923051391007';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVVSmRJaDNjWHlqV2NoNURCS24vYUVxSDNaeS9WbFMyL0d1RW1pdkxtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk1XZmUyQWRNZWM1R2d5YldIN1M2STFSa29UMFRuem03NTNBV1FqcFB6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTXNOQjRBOTRkUXV6MkkwR0hqb1luSWNYNHNuNWFnSzhOMlZjQS9KTUhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aWFNUElEMUJRaXJTbnZsbWtlcWszUkFna0ZTYlVwbTVMYlc1TFpPS25vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NZlhTUTVLQ1QrM0N1cVBjQTcvSUR0SlFvQXAxRUZwS1M4QUc1TnN3SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxrNEZ0TTE3ckdVMDlmUU0yRkhjdmpDYms0endpTFVUR3JGbG5UMFlhQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU54UTZIRWhEWGpEelZvL3ZQdUtHY1E4Sk5ERjVWOFc5SDFuQmdaVkZHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnBLUUNUWVFVK3VtY2pBR2lhdUNtS2JpM3plZEEwRTVEdWxpOGd6allHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJIanNyWUZkOHB6U3JwT2xNNUtjZlllTy9LQi9zcEl0SzZwcGRCWWlWdjB6YVpKaU1hMW4vaklSUzRTdjliSGs1K1g0Q2tZN01ROVRJby9TclNiNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJlMW43TE54ZVF5TmUzTW5zQ0dlclNDamkrOThXWUpFa0tTZHpxbzRJVXFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MTM5MTAwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RkJFNzYwMjY4MkIwRkU3MUNCODEzMkU3MUM1RDlBOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE0MzQyNDUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNTEzOTEwMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAwRjFCNjE1OUMzOEU0NUMyREIxQjBBNUQyQUQwQUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNDM0MjQ1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiblRtR0xaN2hTOXVISHNCYlF1M2xLUSIsInBob25lSWQiOiI4MzQxODExNy1hZTE5LTQ4Y2ItODQyOC00ZmFkNzA3ZTc0YzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemFGamZaY1Mzc1dBVHlIMy8zMWkybkJobmwwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0dUROcUZndmJ5UUUvL0dicVc3a0hUNFFTaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzMUFRVFIxUCIsIm1lIjp7ImlkIjoiOTIzMDUxMzkxMDA3OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngeKYhlNUUkFOR0VS4piG6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL2l2cGNIRUtLVXU3RUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvQWtqaXRSc3NsamJYT0tZY0c1a1E4YnhVdkdydGtFMmk3QStyaS9tYVhzPSIsImFjY291bnRTaWduYXR1cmUiOiJBVlNJRXhzYnRuUmwrUEgzSmY5LzVvV1IxbkZiU25uNHBRbmZLRjAvOVViUE9USzNUT2M3ajN4RFBrbDlLRDg1NDFldWRXMkF2RC9tT0hUZmM1MlJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMCtBamFFak03QlVuQTNpT1dFQTJ6bUlKWWU0L0hGTVpFSTVndTdnUWZXMTM0R3diOTZva1BVQXBDNGF5OHFCNHBHWmRiVmFHc0V1RDUreVNBSTR1RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNTEzOTEwMDc6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZndKSTRyVWJMSlkyMXppbUhCdVpFUEc4Vkx4cTdaQk5vdXdQcTR2NW1sNyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDM0MjQ0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZkQifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
