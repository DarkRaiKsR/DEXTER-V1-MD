const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVVSmRJaDNjWHlqV2NoNURCS24vYUVxSDNaeS9WbFMyL0d1RW1pdkxtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk1XZmUyQWRNZWM1R2d5YldIN1M2STFSa29UMFRuem03NTNBV1FqcFB6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTXNOQjRBOTRkUXV6MkkwR0hqb1luSWNYNHNuNWFnSzhOMlZjQS9KTUhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aWFNUElEMUJRaXJTbnZsbWtlcWszUkFna0ZTYlVwbTVMYlc1TFpPS25vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NZlhTUTVLQ1QrM0N1cVBjQTcvSUR0SlFvQXAxRUZwS1M4QUc1TnN3SDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxrNEZ0TTE3ckdVMDlmUU0yRkhjdmpDYms0endpTFVUR3JGbG5UMFlhQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU54UTZIRWhEWGpEelZvL3ZQdUtHY1E4Sk5ERjVWOFc5SDFuQmdaVkZHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnBLUUNUWVFVK3VtY2pBR2lhdUNtS2JpM3plZEEwRTVEdWxpOGd6allHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJIanNyWUZkOHB6U3JwT2xNNUtjZlllTy9LQi9zcEl0SzZwcGRCWWlWdjB6YVpKaU1hMW4vaklSUzRTdjliSGs1K1g0Q2tZN01ROVRJby9TclNiNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWNyZXRLZXkiOiJlMW43TE54ZVF5TmUzTW5zQ0dlclNDamkrOThXWUpFa0tTZHpxbzRJVXFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MTM5MTAwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RkJFNzYwMjY4MkIwRkU3MUNCODEzMkU3MUM1RDlBOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE0MzQyNDUwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNTEzOTEwMDdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTAwRjFCNjE1OUMzOEU0NUMyREIxQjBBNUQyQUQwQUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNDM0MjQ1MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiblRtR0xaN2hTOXVISHNCYlF1M2xLUSIsInBob25lSWQiOiI4MzQxODExNy1hZTE5LTQ4Y2ItODQyOC00ZmFkNzA3ZTc0YzgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemFGamZaY1Mzc1dBVHlIMy8zMWkybkJobmwwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ0dUROcUZndmJ5UUUvL0dicVc3a0hUNFFTaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzMUFRVFIxUCIsIm1lIjp7ImlkIjoiOTIzMDUxMzkxMDA3OjY1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngeKYhlNUUkFOR0VS4piG6qeCIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNL2l2cGNIRUtLVXU3RUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvQWtqaXRSc3NsamJYT0tZY0c1a1E4YnhVdkdydGtFMmk3QStyaS9tYVhzPSIsImFjY291bnRTaWduYXR1cmUiOiJBVlNJRXhzYnRuUmwrUEgzSmY5LzVvV1IxbkZiU25uNHBRbmZLRjAvOVViUE9USzNUT2M3ajN4RFBrbDlLRDg1NDFldWRXMkF2RC9tT0hUZmM1MlJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMCtBamFFak03QlVuQTNpT1dFQTJ6bUlKWWU0L0hGTVpFSTVndTdnUWZXMTM0R3diOTZva1BVQXBDNGF5OHFCNHBHWmRiVmFHc0V1RDUreVNBSTR1RFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNTEzOTEwMDc6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZndKSTRyVWJMSlkyMXppbUhCdVpFUEc4Vkx4cTdaQk5vdXdQcTR2NW1sNyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDM0MjQ0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLZkQifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "⚔  qasim  ⚔",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923051391007",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'DEXTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
