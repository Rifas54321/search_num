const truesearch = require("truesearch");
const input = require("readline-sync");
const phoneNumber = "";
const bot_token = "6507681162:AAGaoadFk7_24D2TD7MItN7yawuxOkKMe3A";
const Telegram = require("node-telegram-bot-api");
const bot = new Telegram(bot_token,{polling:true})
const tc_token = 'a1i0F--jBP0iyVcVMQ_jzaI-bSOnfJ11onu5S_DF3h61cH4TmNaVeIBTD71v9Yd7'
var tmp = [];
bot.on("message",async(msg)=>{
  const chatId = msg.chat.id;
  let mesg = await msg.text;
  if(mesg.startsWith("+")){
    if(mesg.length <10){
      bot.sendMessage(chatId,"𝕤𝕠𝕣𝕣𝕪! 𝕡𝕝𝕖𝕒𝕤𝕖 𝕤𝕖𝕟𝕕 𝕧𝕒𝕝𝕚𝕕 𝕟𝕦𝕞𝕓𝕖𝕣")
    }else{
      try{
    async function main(){
      console.log("we are here")
      //const res = await truesearch(mesg,tc_token)
     // bot.sendMessage(chatId,res)
     const msg1 = mesg;
     tmp.push(msg1)
     console.log(tmp)
    let res = await truesearch(tmp[0],tc_token).then(data=>{
      //console.log(data)
      let motd =`ℕ𝕒𝕞𝕖 :    ${data.name}\n
𝕔𝕚𝕥𝕪 :    ${data.addresses[0].city}\n
𝕔𝕠𝕦𝕟𝕥𝕣𝕪 𝕔𝕠𝕕𝕖 :    ${data.addresses[0].countryCode}\n
𝕥𝕚𝕞𝕖 :    ${data.addresses[0].timeZone}\n
𝕖𝕞𝕒𝕚𝕝:   ${data.email}\n
𝕔𝕠𝕦𝕟𝕥𝕣𝕪 :    ${data.countryDetails.name}\n
𝕟𝕒𝕥𝕚𝕧𝕖 𝕝𝕒𝕟𝕘 :    ${data.countryDetails.native}\n
𝕡𝕙𝕠𝕟𝕖 𝕔𝕠𝕕𝕖 :    ${data.countryDetails.phone}\n 
𝕔𝕠𝕟𝕥𝕚𝕟𝕖𝕟𝕥 :    ${data.countryDetails.continent}\n 
𝕔𝕒𝕡𝕚𝕥𝕒𝕝 :    ${data.countryDetails.capital}\n 
𝕔𝕦𝕣𝕣𝕖𝕟𝕔𝕪 :    ${data.countryDetails.currency}\n 
𝕝𝕒𝕟𝕘𝕦𝕒𝕘𝕖𝕤 :    ${data.countryDetails.languages}\n 
𝕗𝕝𝕒𝕘 :    ${data.countryDetails.flag}
`
bot.sendMessage(chatId,motd)
      
    
     
    }).catch(err)=>{
      bot.sendMessage(chatId,"sorry! error occured")
    }
    }
    main();
      }catch(err){
        if(err){
          console.log(err)
          bot.sendMessage(chatId,"an error occured")
        }
      }
    
    
    
    
    }
  }
  if(msg.text =="/start"){
    bot.sendChatAction(chatId,"typing")
    message = `
ℍ𝕖𝕝𝕝𝕠! @${msg.chat.username}
𝕋𝕙𝕚𝕤 𝕓𝕠𝕥 𝕚𝕤 𝕦𝕤𝕖 𝕥𝕠 𝕗𝕚𝕟𝕕 𝕞𝕠𝕓𝕚𝕝𝕖 𝕟𝕦𝕞𝕓𝕖𝕣 𝕕𝕖𝕥𝕒𝕚𝕝𝕤\n
𝕓𝕠𝕥 𝕚𝕤 𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕓𝕪 @rifas11\n
/search 𝕔𝕠𝕞𝕞𝕒𝕟𝕕 𝕦𝕤𝕖 𝕥𝕠 𝕤𝕖𝕒𝕣𝕔𝕙 𝕟𝕦𝕞𝕓𝕖𝕣 𝕕𝕖𝕥𝕒𝕚𝕝𝕤
`
    bot.sendMessage(chatId,message)
    
  }
  if(msg.text=="/search"){
   const opt = {
     reply_markup :{
       inline_keyboard :
         [[{text:"search",callback_data:"search_num"}]]
     }
   }
    
    const motd = `
       ℍ𝕚! @${msg.chat.username}
𝕥𝕙𝕚𝕤 𝕓𝕠𝕥 𝕚𝕤 𝕦𝕤𝕖𝕕 𝕥𝕠 𝕝𝕠𝕠𝕜𝕦𝕡 𝕟𝕦𝕞𝕓𝕖𝕣𝕤
𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕓𝕪 @𝕣𝕚𝕗𝕒𝕤𝟙𝟙`
    bot.sendMessage(chatId,motd,opt)
    bot.sendChatAction(chatId,"typing")
  }
  bot.on("callback_query",async(msg)=>{
    action = msg.data;
    cid = msg.from.id;
    if(action=="search_num"){
      search_num(msg)
    }
  })
  async function search_num(msg){
    key = {
      reply_markup:{
        force_reply:true
      }
      }
let motd =`
      𝕊𝕖𝕟𝕕 𝕡𝕙𝕠𝕟𝕖 𝕟𝕠 𝕚𝕟 𝕚𝕟𝕥𝕖𝕣𝕟𝕒𝕥𝕚𝕠𝕟 𝕗𝕠𝕣𝕞𝕒𝕥
𝕖𝕘 : "+𝟡𝟙𝟡𝟘𝕏𝕏𝕏𝕏𝕏𝕏𝟚𝟙`
  bot.sendMessage(msg.from.id,motd,key)
  
    
  }



})