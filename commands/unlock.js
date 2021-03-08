const discord = require('discord.js')

module.exports.run = async (bot, message, args, con) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You don't have permission to do this.")

    message.channel.overwritePermissions([
        {
            id: '698622362559447221',
            allow: ['SEND_MESSAGES']
        },
        {
            id: message.guild.id,
            allow: ['SEND_MESSAGES']
        }
    ])

    let embed = new discord.MessageEmbed()
    .setTitle(` Channel unlocked`)
    .setDescription(`This channel is unlocked, so you can speak aigan.`)
    .setColor('RED')
    .setFooter(`© Devisuality 2020`)

    message.channel.send(embed)
}

module.exports.help = {
    name: "unlock"
}