const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918435010927";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // SUHAIL_23_02_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieDdmMFJENWlZQnlOR3RGb1BiSU9XR0ROSVFJOUhYZE9OMThiZElVM3RXbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTg0MzUwMTA5MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5NzhFNTNBRjcxNUU0MTYwNjNDQTVDN0QzNEE2RDVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzUyNjE3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODQzNTAxMDkyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDI3QzRDOTBCODU2RUYzMUVCNzRCNTdBRUEzNDIyNTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNTI2MTcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNPNnJNZFU4VDVXaGhEWE51ZGhjcHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGNjZTM4MjItYjlhYS00MjhlLWJlYmMtOWI5NTI0NzdlNDhlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTkxLFxuICAgICAgMjA3LFxuICAgICAgODUsXG4gICAgICA5OSxcbiAgICAgIDIwMSxcbiAgICAgIDI1MyxcbiAgICAgIDgxLFxuICAgICAgMjM3LFxuICAgICAgMjU1LFxuICAgICAgMTQ0LFxuICAgICAgNzksXG4gICAgICA1NCxcbiAgICAgIDQ1LFxuICAgICAgMjI0LFxuICAgICAgNTcsXG4gICAgICAyLFxuICAgICAgMjQ4LFxuICAgICAgMjAsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDQ1LFxuICAgICAgMTQ1LFxuICAgICAgODgsXG4gICAgICA4MSxcbiAgICAgIDE4NixcbiAgICAgIDY5LFxuICAgICAgMzksXG4gICAgICA5NSxcbiAgICAgIDU5LFxuICAgICAgNDAsXG4gICAgICA5MixcbiAgICAgIDc3LFxuICAgICAgMTczLFxuICAgICAgMzQsXG4gICAgICAxNDEsXG4gICAgICAzMyxcbiAgICAgIDE2OSxcbiAgICAgIDI0NixcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0UTNTWkpKU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NDM1MDEwOTI3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDUyNDgyNjYyNjQ3MzA6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwid2hpdGVfX19fX19fX19fX19fX3dvbGZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcjJ5cXdERUpLRnpyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1rQnZUSDZvM2dIQ1ZUU24xZXUyNjQ5aW9kc21GKzMxa3lrSkd4ZFFoRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL3l0Y3JzTE01bGhhbHhlMHpFU21SbVkyT3NzS0hwbzFpSXZSQ2t3UHh0emtXVEFxbGc5K0QyMFpPcHdERC9SS29yQnE2bk5pUTAzMFRkT2tDeVFkQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZzBuZS8yTlZDRjlKWG9CdEFjR3Y2ZExqVFQyZDljSC93OFRFc0syZ3RKN3pqek1ZVEhpZ1ZmTnZxZ094cFkxOG14c21lQUlZY09SbEhsQXdQWjhqaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NDM1MDEwOTI3OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1MjYxNjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZktcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmSy5qc29uIjogIntcImtleURhdGFcIjpcIjhxVHd3VDVqektUUktXWTBsOCtsRGlQQUxVTTZyQk03WEFvUUNrUHE0Njg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODk4ODA4NjQ5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNTE5NTQxMzY4XCJ9Igp9 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Rahul-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
