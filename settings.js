const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVkWHkrNThienhFM1paUkFuNHlNK28zN3c0SXlGcUhiRlc4Ujlsb2IxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFid0ZxcW51L1N5aHpsc0xLOTRoaitwQldjdGFzUE5WVUVkQ2pKRWUwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRUhhY0htdktTVitvbTJpZFg2OVIwTEhFK09DcHpLRXdZVDRRbXdxRFVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUThuNGg1RnViSGh2ZC8xcWdlWkszMmxMY2pqQ0tiY0JMZkpPOXB2aURzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVHWkwycGlPdzkxaGNPL1Qzb1dJNXNaelNybUJEWUtaZlV1YVlHN2IySDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl5TGJyZzFxMVJmSFhxN2VvTTl3QStyR3RZSmljMzMvcXp1aHU5dFNNM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVyb21VVmVvTWg2cEk4M3piRTJweEllRGhGRE9PRmVBVW93bnY5bDFWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmEvMFU3bk5xNzNFdnpTcHRGdUZxeEJKVjlzV1ovamNFcWpMc3FyTFJXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcrQlEzYW5IVVIzNFRVc3VlRStrbW41MWw2YlZ5WHFYdFRWVWk1VzlpbkkwL2ZSbmhCbmdOYW52T0tVU09SVC9nQmxmbit1eExlTnQ5cHNpNmtWQWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiIxWWdLZGxCa2RzMHBjaC9CZnZZZjlicFlaK3NnNEpzYWlIODQwbHhBdEIwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MTM5MTAwN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMDZBQUZGODRGMUZCRUUwRDMxMzNFOTBGOTc2OTgxOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1NDUyMDQwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJsRjI3WkRxNlRBU0hRSmRtZGNzVzRnIiwicGhvbmVJZCI6ImJlNjU1MDBlLWU5ZWQtNGYyZC1hMTdmLTlhMGYxOGRhNWMyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMXAxMXBwc1QzOGg2cTJPejdSNkVYYXZPUW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjBIN3pRQi91eHM1azNPT0I2Rk10NVpLc0ZzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJZOVc4TkdSIiwibWUiOnsiaWQiOiI5MjMwNTEzOTEwMDc6ODFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi6qeB4piGU1RSQU5HRVLimIbqp4IifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EaXZwY0hFUG53L3JFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9Ba2ppdFJzc2xqYlhPS1ljRzVrUThieFV2R3J0a0UyaTdBK3JpL21hWHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZoUS9GUlZIcnk4cGNsQ3pIOTRDQlllZ0FDdmVueW9zSXNkZjRwN0lzNmhnZm9Ccy9nVHkxeUJWdDRtVjNUKzZEVHBBVWQvdnN2Q3VFdUxRSkx0M0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrV3JscWFQMWcrQ05uZ1NwTzM3MmdtY1VaWkJuSzVNYWNzQTZXNHJqakJQYUhDYmlmVHp3UmhIWGVFek1NYWFSd3VDVmhTUjVmN3RvRGVGY1RmS1FnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzA1MTM5MTAwNzo4MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmd0pJNHJVYkxKWTIxemltSEJ1WkVQRzhWTHhxN1pCTm91d1BxNHY1bWw3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1NDUyMDM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtmRCJ9',
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
