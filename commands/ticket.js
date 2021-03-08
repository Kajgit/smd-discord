const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    var embedCreateTicket = new discord.MessageEmbed()
    .setColor('#e50000')
        .setTitle("Hello, " + message.author.username)
        .setDescription(`Support ticket has been made.`)
        .setFooter("© Designity 2020");
 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.channels.create(message.author.username + `-ticket`, 
    {
    type: 'text', 
    permissionOverwrites: [
            {
             id: "698622362559447221", 
            allow: ['VIEW_CHANNEL'],
            },
            {
            id: message.author.id,
            allow: ['VIEW_CHANNEL']
            }, 
            {
            id: message.guild.id,
            deny: ['VIEW_CHANNEL']
            }
            ]
    })
           .then(channel => {
            channel.setParent(`701893798531432598`)

            channel.overwritePermissions([
                {
                    id: "698622362559447221", 
                    allow: ['VIEW_CHANNEL'],
                    },
                    {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL']
                    }, 
                    {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL']
                    }
            ]);
    
            let embed = new discord.MessageEmbed()
            .setTitle(`**New Ticket**`)
            .setColor(`#ff4530`)
            .setDescription(`Hello, our staff team will help you further.`)
            .setFooter(`© Designity 2020`)
    
            channel.send(embed)
    
           })
 
}
 
module.exports.help = {
    name: "ticket",
    aliases: "ticket",
    description: "Maak een ticket aan"
}