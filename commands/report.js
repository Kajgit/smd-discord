const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let msg = args.join(" ");

    if(!msg) return message.channel.send(`You have to provide a reason.`)

    else {

        message.delete();

        var serverIcon = message.guild.iconURL;
        let embed = new discord.MessageEmbed()
        .setTitle('Report')
        .setColor('#1c1c1c')
        .setThumbnail("http://www.cityofhinesville.org/ImageRepository/Document?documentID=2995")
        .addField(`Report from:`, message.author.username)
        .addField(`Containing bug or issue:`, msg)
        .setFooter(`© Designity 2020`)
        .setTimestamp()


        let chan = message.guild.channels.cache.get('767861166185513000')

        if (!chan) return message.channel.send(`There is no channel called logs, check the bot config to change the channel ID's`)
        chan.send(embed)
    }

}
 
module.exports.help = {
    cata: "muziek",
    name: "report",
    description: "Laat de bot leaven van het kanaal."
}