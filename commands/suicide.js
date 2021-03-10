const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
        var videos = ['https://thumbs.gfycat.com/LeanGranularCur-max-1mb.gif', 'https://media.tenor.com/images/40f5c0e1efe84dc48facff2e437371ce/tenor.gif', 'https://thumbs.gfycat.com/ApprehensiveIlliterateCollie-max-1mb.gif',
                    'https://data.whicdn.com/images/168089324/original.gif'];
        var randomArgs = Math.floor(Math.random() * 4) + 1;

        console.log(randomArgs);

        if (randomArgs == '3') {
            let savedEmbed = new discord.MessageEmbed()
            .setColor('#1c1c1c')
            .setImage(videos[3])
            .addField(message.author.username, `got saved from doing the zepreh!`)
            .setFooter(`© SmD 2020`)
            .setTimestamp()

            message.channel.send(savedEmbed)
        } else {
            let embed = new discord.MessageEmbed()
            .setColor('#1c1c1c')
            .setImage(videos[randomArgs])
            .addField(message.author.username, `deed zojuist de zepreh!`)
            .setFooter(`© SmD 2020`)
            .setTimestamp()

            message.channel.send(embed)
        }

        

}
 
module.exports.help = {
    cata: "muziek",
    name: "suicide",
    description: "Laat de bot leaven van het kanaal."
}