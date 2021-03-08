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
        .addField("Suggestie:", idee)
        .addField("Ingestuurd door:", message.author)
        .setFooter(`© SmD 2020`)

    // Vind het kanaal.
    var ideeChannel = message.guild.channels.cache.get(`818609614353334323`);
    if (!ideeChannel) return message.guild.send("Kan geen channel vinden voor suggesties");

    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(message => {
        message.react('👍').then(() => message.react('👎'));

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.reply('you reacted with a thumbs up.');
		} else {
			message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
	});
    });

    

    message.reply(`Je hebt succesvol een suggestie verstuurd! :white_check_mark:`);

}

module.exports.help = {
    name: "suggest",
    description: "Heb je een idee. Zet het dan hier en misschien passen we het toe."
};