const aoijs = require("aoi.js");
 
const bot = new aoijs.Bot({
  token: "TOKEN",  // .env dosyasına tokeni koyduysanız bu kısmı [ token: process.env.token, ] olarak değiştirin.
  prefix: "!", // Botunuzun prefixini(ön ekini) belirleyin.
  intents: "all", 
  mobilePlatform: false, // Botunuz mobileden giriş yapıyormuş gibi bir simge çıkmasını istiyorsanız [ true ] yazın.
  sharding: false, // Shard bağlamak istiyorsanız buraya [ true ] yazın.
  shardAmount: 2, 
})

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./komutlar/") // komutlar dosyasını tanımlayın

bot.onMessage()

bot.variables({
 cat:"5", // botunuzun variablesleri
})

bot.status({
 text: "ghostdevxd",
 type:"WATCHING",
 time:"12"
})
bot.readyCommand({
    channel: "",
    code: `
$log[
$userTag[$clientid] Giriş Yapıldı!
$pingms - ping
$serverCount - sunucu
$allMembersCount - kullanıcı]`
})

bot.command({
  name: "ping",
  code: `
  Ping $pingms
  `,
})
