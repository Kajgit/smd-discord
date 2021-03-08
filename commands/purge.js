const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You don't have permission to do this.")

    var aantal = args[0];

    if (!aantal) return message.channel.send(":x: Incorrect usage! !purge <amount of messages (max 100)>")

    message.channel.messages.fetch({ limit: aantal })
        .then(messages => {
            message.channel.bulkDelete(messages);
            message.channel.send(`Successfully cleared ${aantal}!`).then(message => {
                setTimeout(() => {
                    message.delete()
                  }, 1000);
            })
        }).catch(error => {
            return message.channel.send(`Something went wrong.`);
        })

}

module.exports.help = {
  cata: "staff",
  name: "purge",
  aliases: "koppel"
}