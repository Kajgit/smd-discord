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
        .setTimestamp()

    // Vind het kanaal.
    var ideeChannel = message.guild.channels.cache.get(`818609614353334323`);
    var pollChannel = message.guild.channels.cache.get(`818609616287301733`);
    if (!ideeChannel) return message.guild.send("Kan geen channel vinden voor suggesties");

    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(ideeEmbed => {
        ideeEmbed.react('👍').then(() => ideeEmbed.react('👎'));

        const filter = (reaction) => {
            return ['👍', '👎'].includes(reaction.emoji.name);
        };

        ideeEmbed.awaitReactions(filter, { max: 1, time: 12000000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

        var pollEmbed = new discord.MessageEmbed()
        .setTitle("**Nieuwe Poll**")
        .setColor("#ff4530")
        .addField("Poll:", idee)
        .addField("Ingestuurd door:", message.author)
        .setFooter(`© SmD 2020`)

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