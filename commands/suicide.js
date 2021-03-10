const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
        var videos = ['https://thumbs.gfycat.com/LeanGranularCur-max-1mb.gif', ''];
        var randomArgs = Math.floor(Math.random() * 6) + 1;

        console.log(randomArgs);

        let embed = new discord.MessageEmbed()
        .setColor('#1c1c1c')
        .setImage()
        .addField(message.author.username, `deed zojuist de zepreh!`)
        .setFooter(`© SmD 2020`)
        .setTimestamp()

        message.channel.send(embed)

}
 
module.exports.help = {
    cata: "muziek",
    name: "suicide",
    description: "Laat de bot leaven van het kanaal."
}