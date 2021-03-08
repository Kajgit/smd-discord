const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let msg = args.join(" ");

    if(!msg) return message.channel.send(`Je moet een reden opgeven.`)

    else {

        message.delete();

        var serverIcon = message.guild.iconURL;
        let embed = new discord.MessageEmbed()
        .setTitle('Report')
        .setColor('#1c1c1c')
        .setThumbnail(serverIcon)
        .addField(`Report van:`, message.author.username)
        .addField(`Bug of probleem:`, msg)
        .setFooter(`© SmD 2020`)
        .setTimestamp()


        let chan = message.guild.channels.cache.get('807775838359519232')

        if (!chan) return message.channel.send(`Er is geen log channel.`)
        chan.send(embed)
    }

}
 
module.exports.help = {
    cata: "muziek",
    name: "report",
    description: "Report een speler/bug."
}