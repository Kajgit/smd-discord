const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new discord.MessageEmbed()
  .setTitle(`**Server info**`)
  .setColor(`#ff4530`)
  .addField(`**Dynmap**`, `http://51.91.167.119:65535/?worldname=Ryglimis&mapname=flat&zoom=0&x=-1240&y=64&z=552`)
  .addField(`**Server ip**`, `Surclav.g-s.nu`)
  .setFooter(`© Designity 2020`)

  message.channel.send(embed)

}

module.exports.help = {
  cata: "staff",
  name: "serverinfo",
  aliases: "ip"
}