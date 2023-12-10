const bot_token = "6507681162:AAGaoadFk7_24D2TD7MItN7yawuxOkKMe3A";
const exec = require("child_process").exec
const tc_token =
'a1i0F--jBP0iyVcVMQ_jzaI-bSOnfJ11onu5S_DF3h61cH4TmNaVeIBTD71v9Yd7'
const telegram = require("node-telegram-bot-api")
const bot = new telegram(bot_token,{polling:true});
let arr = []
bot.on("message",async(msg)=>{
  let chatId = msg.chat.id
  if(msg.text.startsWith("+") && msg.text.length > 12){
    arr.push(msg.text)
    let res = arr[arr.length-1]
    console.log(res)
    let dat = search(res,chatId)
    //bot.sendMessage(chatId,dat)
  }else if(msg.text == "About"){
    bot.sendMessage(chatId,"@rifas11")
  }else if(msg.text == "/start"){
    let txt  = `
       ℍ𝕚! @${msg.chat.username}
𝕥𝕙𝕚𝕤 𝕓𝕠𝕥 𝕚𝕤 𝕦𝕤𝕖𝕕 𝕥𝕠 𝕝𝕠𝕠𝕜𝕦𝕡 𝕟𝕦𝕞𝕓𝕖𝕣𝕤
𝕔𝕣𝕖𝕒𝕥𝕖𝕕 𝕓𝕪 @rifas11`
    bot.sendMessage(chatId,txt)
  }else{
    var not_found= 
`
𝙋𝙇𝙀𝘼𝙎𝙀 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍 𝙄𝙉 𝙁𝙐𝙇𝙇 𝙄𝙉𝙏𝙀𝙍𝙉𝘼𝙏𝙄𝙊𝙉𝘼𝙇 𝙁𝙊𝙍𝙈𝘼𝙏\n
𝙚𝙜 :-  +9190𝙓𝙓𝙓𝙓𝙓𝙓21
`
    bot.sendMessage(chatId,not_found)
  }
})
async function search(num,chatId){
  exec(`truecallerjs -s ${num} --json`,async(a,b,c)=>{
    try{
    let res = await JSON.parse(b)
    let data = await res.data[0]
    if(data == undefined){
      bot.sendMessage(chatId,"𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙛𝙤𝙪𝙣𝙙 𝙘𝙝𝙚𝙘𝙠 𝙣𝙪𝙢𝙗𝙚𝙧 𝙖𝙣𝙙 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣")
    }else{
      let email = "not found";
    try{
      if(data.internetAddresses[0].id == undefined ){
        email = email;
     }else{
       email = data.internetAddresses[0].id
     }
    }catch{
      console.log("no emails found")
    }
    
    
      val = `𝙉𝙖𝙢𝙚 :    ${data.name}\n
𝙀𝙢𝙖𝙞𝙡 : ${email}\n
𝘾𝙤𝙪𝙣𝙩𝙧𝙮 : ${data.phones[0].countryCode}\n
𝘾𝙖𝙧𝙧𝙞𝙚𝙧 : ${data.phones[0].carrier}\n
𝘾𝙞𝙩𝙮 : ${data.addresses[0].city}\n 
𝙏𝙞𝙢𝙚 𝙕𝙤𝙣𝙚 : ${data.addresses[0].timeZone}\n 
𝘿𝙞𝙖𝙡𝙞𝙣𝙜 𝙘𝙤𝙙𝙚 : +${data.phones[0].dialingCode}\n

`
bot.sendMessage(chatId,val)
    }
  }catch(e){
    bot.sendMessage(chatId,"𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙛𝙤𝙪𝙣𝙙 𝙘𝙝𝙚𝙘𝙠 𝙣𝙪𝙢𝙗𝙚𝙧 𝙖𝙣𝙙 𝙩𝙧𝙮 𝙖𝙜𝙖𝙞𝙣")
  }
  }
  
  )
}