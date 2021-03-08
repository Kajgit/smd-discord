const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new discord.MessageEmbed()
  .setTitle(`**Help menu**`)
  .setColor(`#ff4530`)
  .addField(`**User commands**`, `!order - Creates a order\n!review - Review our service/products\n!suggest - Give us a suggestion so we can improve\n!ticket- Create a support ticket\n!report - Report an bug or an issue.`)
  .addField(`**Staff commands**`, `!close - Close the ticket\n!purge - Clears the amount of messages`)
  .setFooter(`© Designity 2020`)

  message.author.send(embed)

  message.reply(`Check your DMs (Make sure to allow server DMs)`)

}

module.exports.help = {
  cata: "staff",
  name: "help",
  aliases: "koppel"
}