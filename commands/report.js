const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let msg = args.join(" ");

    let usageEmbed = new discord.MessageEmbed()
    .setTitle(`Usage`)
    .setColor('#1c1c1c')
    .setDescription(`!report [bug/naam/klacht] [beschrijving]`)
    .setFooter(`© SmD 2020`)

    if(!msg) return message.channel.send(usageEmbed)

    else {

        message.delete();

        var serverIcon = message.guild.iconURL;
        let embed = new discord.MessageEmbed()
        .setTitle(`Report`)
        .setColor(`#1c1c1c`)
        .setAvatar("http://www.cityofhinesville.org/ImageRepository/Document?documentID=2995")
        .addField(`Report van:`, message.author.username)
        .addField(`Bug of probleem:`, msg)
        .setFooter(`© SmD 2020`)
        .setTimestamp()


        let channel = message.guild.channels.cache.get("818609614353334323");

        if (!channel) return message.channel.send(`Er is geen channel genaamd logs, kijk de config na`)
        channel.send(embed)
    }

}
 
module.exports.help = {
    cata: "muziek",
    name: "report",
    description: "Laat de bot leaven van het kanaal."
}