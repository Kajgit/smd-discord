const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt hier geen permissies voor.")

    var aantal = args[0];

    if (!aantal) return message.channel.send("Incorrect gebruik! !purge <aantal berichten (max 100)>")

    message.channel.messages.fetch({ limit: aantal })
        .then(messages => {
            message.channel.bulkDelete(messages);
            message.channel.send(`Succesvol ${aantal} gecleared!`).then(message => {
                setTimeout(() => {
                    message.delete()
                  }, 1000);
            })
        }).catch(error => {
            return message.channel.send(`Er is iets fout gegaan.`);
        })

}

module.exports.help = {
  cata: "staff",
  name: "purge",
  aliases: "koppel"
}