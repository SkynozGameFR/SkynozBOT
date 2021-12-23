const Discord = require("discord.js")
const bot = new Discord.Client({
  intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
      Discord.Intents.FLAGS.GUILD_MEMBERS,
      Discord.Intents.FLAGS.DIRECT_MESSAGES,
      Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
      Discord.Intents.FLAGS.GUILD_BANS,
      Discord.Intents.FLAGS.GUILD_PRESENCES,
   ]
});
const config = require("./config.json")
const prefix = config ["prefix"]
const token = config ["token"]

bot.on("ready", async () => {
    console.log("Je suis connecté sur Discord ! ")
    bot.user.setActivity("bot de Skynoz", {type: "STREAMING", url:"https://www.twitch.tv/skynoz_tv"})
});

// Commandes Ping 
bot.on("messageCreate", async message => {
    if(message.content === prefix + "ping"){
        message.reply("Pong !")
    }
   console.log("un message a été envoyer " + message.content.toString())
});

// Commande : Embed
const { DiscordAPIError } = require("discord.js");

bot.on("messageCreate", message => {
    if (message.author.bot) return; 

    //!help
    if(message.content === prefix + "help" ){
        const embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Liste des commandes ")
        .setURL("https://discord.js.org/")
        .setAuthor("Auteur du bot", "https://imgur.com/9SYOxOB.png", "https://discord.js.org/")
        .setDescription("Vous y trouverez la liste des commandes du bot")
        .setThumbnail("https://imgur.com/9SYOxOB.png")
        .addField("/help", "Affiche la liste des commandes")
        .addField("/ping", "Vous renvoie Pong")
        .setImage("https://imgur.com/9SYOxOB.png")
        .setTimestamp()
        .setFooter("Ce bot appartient à son créateur", "https://imgur.com/9SYOxOB.png");

        message.channel.send({ embeds: [embed]});
        
        // Commande Clear 
        
    }
}); 

bot.login(token)