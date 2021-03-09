const discord = require('discord.js')

module.exports.run = async (bot, message, args, con) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt hier geen permissies voor.")

    message.channel.overwritePermissions([
        {
            id: '807775107812032513',
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
    .setDescription(`Dit kanaal is gelocked, dus je kunt niet praten.`)
    .setColor('RED')
    .setFooter(`© SmD 2020`)

    message.channel.send(embed)
}

module.exports.help = {
    name: "lock"
}