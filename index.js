const Discord = require("discord.js");
const client = new Discord.Client(Discord.Intents ); 
const config = require("./config.json"); 
const prefix = config.prefix; 

client.on("ready" , () => {
    console.log(`Connecté en tant que ${client.user.tag}`);
    client.user.setStatus("online");
    client.user.setActivity("En développement", {type: "WATCHING"});
});

// Event: message 
client.on("message", async (message) => {

    // Vérifications primaires
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
   
    // Commande: Ping 
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send(`:ping_pong: Pong ! ${client.ws.ping}ms`);
    };

     // Commande : Embed
    if (message.content.startsWith(`${prefix}embed`)) {
        let exempleEmbed = new Discord.MessageEmbed()


        .setColor(message.member.roles.highest.color)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic: true }),'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send("Bonjour...", exempleEmbed);

        // Commande: Say
        if (message.content.startsWith(`${prefix}say`)) {}
           var args = message.content.split(" ");
           var messageContent = message.content.slice(args[1].length + 1); 

           if (!messageContent) return message.channel.send(":x: Veuillez indiquer quelque chose à répéter !");
    }
});

client.login(config.token); ODg4NTMyODAzMTUzNzE5MzQ2.YUUEqA.M_18iHbE1qER0lczT2g9nnfedgw