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
            deny: ['SEND_MESSAGES']
        },
        {
            id: '696794666363781279',
            deny: ['SEND_MESSAGES']
        }
    ])

    let embed = new discord.MessageEmbed()
    .setTitle(` Channel locked`)
    .setDescription(`This channel is locked, so you can't speak.`)
    .setColor('RED')
    .setFooter(`© Devisuality 2020`)

    message.channel.send(embed)
}

module.exports.help = {
    name: "lock"
}