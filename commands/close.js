const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You don't have permission to do this.")

    if (!message.channel.name.endsWith(`ticket`)) return message.channel.send(`Please use this command in a ticket.`);

    else message.channel.delete();

}

module.exports.help = {
  cata: "staff",
  name: "close",
  aliases: "koppel"
}