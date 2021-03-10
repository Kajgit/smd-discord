const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        message.delete();

        var serverIcon = message.guild.iconURL;
        let embed = new discord.MessageEmbed()
        .setTitle('Gebruik van command')
        .setColor('#1c1c1c')
        .setThumbnail(serverIcon)
        .setDescription("http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png")
        .setFooter(`© SmD 2020`)
        .setTimestamp()

        message.channel.send(embed)

}
 
module.exports.help = {
    cata: "muziek",
    name: "reportusage",
    description: "Laat de bot leaven van het kanaal."
}