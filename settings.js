const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZXNStaaXA2M09yZjQ0cE1aT0VlenRTYlE1NDd2STlaTmRRbGo4V2UzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGtmNTd3TDAvcFVJSG0xazg2bzc4UVVlSDg4S0JsNUtLQlpZVlJMb0JBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtT1pwdHR3UUxsYkdsUTNKQTBWYldUN1JjV2V0S3ptKzlqWGY2S0xwbzNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITlZtRFJjbmlEUi9zcjNoRVFBRTBneWRYZHdUZmZpRGMxNFZUMFlZa0IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKV1prYTRERTZOU0dFMGM0WHhiVU1NbGlkOWFDaFdyamtvMWUrZzJDWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBZZ0RaVEd2NUxUUzFUcVp6NjdvVnFwZU5GUTdRNnhVN0JrSURhZ1FsM289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05RQ1FacS81d1VkR3FGbjE2aDlWTFJBRTZCN1daMFRnUzh3WmErb3IwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmh1RCtUaWFDNGs4Mk1ac1lGaWlhRnIrM2lOVG9vQU81M2xJNHV6bFh3WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDdlllUUdjOFBmWW04V0I4aGNKalFucU1hZDA5bjJxWkE3YTFHaXM2RThPVVp6c0hqZmR4azl2OVczd2JRZVhmN2hYVDZiNCtybTFxMSt6cXJyUUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJDTmZKNHRMNm1BdlIwbmQ2cFZvU3VkNFZWSFZxR1ZTMURYdkY3ZEs5UTUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTcDdaVV9lRVJsT2VZcnFISDFxeE5RIiwicGhvbmVJZCI6IjI4MmYzZGM4LTRjYjItNDdhNy1iNDliLWIwN2I4ODc3NjYyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MW9CamNsaytpOXBXM1RsOGZ0NEV1ZkNndWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVluQWtJZWRXY1J3Z3B5d3kyV3hpbkUxTXN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc0QUZUODVTIiwibWUiOnsiaWQiOiI5MjMwNTEzOTEwMDc6ODhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4piGU1RSQU5HRVLimIbqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05QaXZwY0hFTjNQa0xJR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Ba2ppdFJzc2xqYlhPS1ljRzVrUThieFV2R3J0a0UyaTdBK3JpL21hWHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJpVlk4MkRIUVM3ZXM1TVhtRmtxSW81WTJhTm9IUkoxVDRXcG1kTzBWZzR2V1pTeEhoV3FSZnE5SzFjSlJIL1dOeG1lWXNlWHhpNVZJeUVGRkttZkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJdk9UU2E3ZnB6Nlp2b21uaTQ0Z2k2MnlucHV6R1AyazJYUUtDbHlLa2J3blhWcW9lSzBIZENRb210ZWlhY0hwQ0hDU1RCTC9nZlR1M01rSWRYS1FBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA1MTM5MTAwNzo4OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmd0pJNHJVYkxKWTIxemltSEJ1WkVQRzhWTHhxN1pCTm91d1BxNHY1bWw3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NzQyNjk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtmWCJ9',
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
