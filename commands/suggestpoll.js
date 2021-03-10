const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // Vang het idee op.
    var idee = args.join(" ");

    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send("Je hebt geen suggestie opgegeven.");

    // Maak het embed aan.
    var ideeEmbed = new discord.MessageEmbed()
        .setTitle("**Nieuwe Suggestie**")
        .setColor("#ff4530")
        .setDescription("Klik op het duimpje omhoog om de suggestie goed te keuren.")
        .addField("Suggestie:", idee)
        .addField("Ingestuurd door:", message.author)
        .setFooter(`© SmD 2020`)
        .setTimestamp()

    // Vind het kanaal.
    var ideeChannel = message.guild.channels.cache.get(`818639596278513715`);
    if (!ideeChannel) return message.channel.send("Kan geen channel vinden voor suggesties");

    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(ideeEmbed => {
        ideeEmbed.react('👍').then(() => ideeEmbed.react('👎'));

        var approveUser = '365518388392624140';

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === approveUser;
        };

        ideeEmbed.awaitReactions(filter, { max: 1, time: 12000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

        var pollEmbed = new discord.MessageEmbed()
        .setTitle("**Nieuwe Poll**")
        .setColor("#ff4530")
        .setThumbnail("https://cdn.discordapp.com/attachments/454327349295579147/818594980204511253/3d-isometric-background-cube-landscape-260nw-1069121108.png")
        .addField("Poll:", idee)
        .addField("Ingestuurd door:", message.author)
        .setFooter(`© SmD 2020`)
        var pollChannel =  message.guild.channels.cache.find(c => c.id === '819142218723229717');

		if (reaction.emoji.name === '👍') {
            pollChannel.send(pollEmbed).then(embedMessage => {
                embedMessage.react('👍');
                embedMessage.react('👎');
            });
		} else {
			ideeChannel.send("Suggestie succesvol geweigerd.");
		}
	})

    });

    

    message.reply(`Je hebt succesvol een suggestie verstuurd! :white_check_mark:`);

}

module.exports.help = {
    name: "suggest",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
};