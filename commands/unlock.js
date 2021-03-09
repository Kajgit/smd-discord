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
            allow: ['SEND_MESSAGES']
        }
    ])

    let embed = new discord.MessageEmbed()
    .setTitle(` Channel unlocked`)
    .setDescription(`Deze channel is geunlocked, dus je kunt weer praten.`)
    .setColor('RED')
    .setFooter(`© SmD 2020`)

    message.channel.send(embed)
}

module.exports.help = {
    name: "unlock"
}