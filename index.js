const Discord = require("discord.js")
const bot = new Discord.Client({
    intents : [
         Discord.Intents.FLAGS.GUILDS,
         Discord.Intents.FLAGS.GUILD_MESSAGES,
         Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
         Discord.Intents.FLAGS.GUILD_MEMBERS,
         Discord.Intents.FLAGS.GUILD_MEMBERS,
         Discord.Intents.FLAGS.DIRECT_MESSAGES,
         Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
         Discord.Intents.FLAGS.GUILD_BANS,
         Discord.Intents.FLAGS.GUILD_PRESENCES,
         Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
})
const config = require("./config.json")
const prefix = config.prefix          ["prefix"]
const token = config["token"]

bot.on("ready", async() => {
    console.log("Je suis connecté sur Discord !")
    bot.user.setActivity("Je suis en développement bg ! ", {type: "STREAMING", url: "https://www.youtube.com/watch?v=dz8Dw_a9KTk"})
    
})
 bot.on("messageCreate", message => (
     
        console.log("un message à été envoyé "+ message.content.toString())
    
 ))
bot.login(token)
