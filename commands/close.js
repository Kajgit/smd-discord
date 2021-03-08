const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt hier geen permissies voor.")

    if (!message.channel.name.endsWith(`ticket`)) return message.channel.send(`Gelieve deze commando in een ticket te gebruiken.`);

    else message.channel.delete();

}

module.exports.help = {
  cata: "staff",
  name: "close",
  aliases: "koppel"
}