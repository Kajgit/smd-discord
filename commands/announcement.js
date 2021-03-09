const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

 

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je hebt hier geen permissies voor.");

  
    var splitser = "//";

   
    if (args[0] == null) {

        var useMessage = new discord.MessageEmbed()
            .setTitle("Announcement")
            .setColor("#ba3030")
            .setDescription(`Gebruik het volgende commando: !mededeling [titel] // [bericht]`);

        return message.channel.send(useMessage);

    }

 
    args = args.join(" ").split(splitser);

   
    if (args[2] == undefined) args[2] = "#00FF00";
    if (args[3] == undefined) args[3] = "general";

 
    var options = {

        titel: args[0] || "Mededeling",
        bericht: args[1] || "- **StaffTeam SmD.**",
        kleur: args[2].trim(),
        kanaal: args[3].trim()

    }

   
    var announcer = message.author;

    
    var announcementMessage = new discord.MessageEmbed()
        .setTitle("Mededeling:")
        .setColor("#ba3030")
        .setDescription(`\n\n ${options.titel} \n\n ${options.bericht} \n`)
        .setTimestamp();


    var announceChannel = message.guild.channels.cache.find(guild => guild.id === '818699128838160414');
    if (!announceChannel) return message.channel.send("Channel niet gevonden.");

   
    announceChannel.send(announcementMessage);

}

module.exports.help = {
    name: "mededeling"
}