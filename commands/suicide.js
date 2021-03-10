const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
        let embed = new discord.MessageEmbed()
        .setTitle('Suicide')
        .setColor('#1c1c1c')
        .setImage('https://thumbs.gfycat.com/LeanGranularCur-max-1mb.gif')
        .setDescription(message.author.username, `deed zojuist de zepreh!`)
        .setFooter(`© SmD 2020`)
        .setTimestamp()

        message.channel.send(embed)

}
 
module.exports.help = {
    cata: "muziek",
    name: "suicide",
    description: "Laat de bot leaven van het kanaal."
}