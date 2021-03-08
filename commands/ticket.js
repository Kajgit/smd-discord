const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    var embedCreateTicket = new discord.MessageEmbed()
    .setColor('#e50000')
        .setTitle("Hey, " + message.author.username)
        .setDescription(`Een support ticket is aangemaakt.`)
        .setFooter("© SmD 2020");
 
    message.channel.send(embedCreateTicket);
 
    // Maak kanaal en zet in juiste categorie.
    message.guild.channels.create(message.author.username + `-ticket`, 
    {
    type: 'text', 
    permissionOverwrites: [
            {
             id: "807775107812032513", 
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
            channel.setParent(`818627102084431873`)

            channel.overwritePermissions([
                {
                    id: "807775107812032513", 
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
            .setTitle(`**Nieuwe Ticket**`)
            .setColor(`#ff4530`)
            .setDescription(`Hey, ons staffteam helpt je verder.`)
            .setFooter(`© SmD 2020`)
    
            channel.send(embed)
    
           })
 
}
 
module.exports.help = {
    name: "ticket",
    aliases: "ticket",
    description: "Maak een ticket aan"
}