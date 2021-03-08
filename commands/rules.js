const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You don't have permission to do this.")

    var prizes = new discord.MessageEmbed()
    .setColor("#ffffff")
        .setTitle(":pushpin: **Official Discord Rules Designity**::pushpin:")
        .setDescription(`
        **#1.**  ︱Racism
        •    It is not allowed to discriminate against any particular group or person. 

        **#2.**  ︱Threat 
        •    It is not allowed to threaten anyone. 

        **#3.**︱ Spamming 
        •    It is not allowed to repeat the same message to often.

        **#4.**︱ Privacy violation
        •    Abusing other people's privacy is not allowed. Think of distributing photos without the permission of the person in the photo. 

        **#5.** ︱Advertisement
        •    It is not allowed to advertise. 

        **#6.** ︱Whining
        •    Harassing employees. 

        **#7.** ︱Caps
        •    Overuse of capslock will not be tolerated.

        - Management, Designity
        `)
        
        .setFooter("© Designity 2020");
 
    return message.channel.send(prizes);
}
 
module.exports.help = {
    name: "rules",
    aliases: "rules",
    description: "Maak een rules aan"
}