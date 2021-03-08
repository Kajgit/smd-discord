//Review commando

const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if (!args[0]) return message.channel.send("Give a number between 1 and 5.");

    const aantalSterren = Number(args[0]);

    if (aantalSterren < 1 || aantalSterren > 5) return message.channel.send("Incorrect usage! !review <1/5 stars> <message>");

    const bericht = args.splice(1, args.length).join(' ');

    if (!bericht) return message.reply(`You have to provide a message.`)

    var reviewchannel = message.guild.channels.cache.get(`767021705134211093`);
    if (!reviewchannel) return message.channel.send("Reviews channel not found.");

    var sterren = "";

    switch (aantalSterren) {
        case 5:
            sterren = ":star: :star: :star: :star: :star:";
            break;
        case 4:
            sterren = ":star: :star: :star: :star:";
            break;
        case 3:
            sterren = ":star: :star: :star:";
            break;
        case 2:
            sterren = ":star: :star:";
            break;
        case 1:
            sterren = ":star:";
            break;
        default:
            break;
    }

    var serverIcon = message.guild.iconURL;
    var review = new Discord.MessageEmbed()
        .setTitle("**New review!**")
        .setColor("#ff4530")
        .setThumbnail(serverIcon)
        .addField("By:", message.author)
        .addField("Rating:", sterren)
        .addField("Review:", bericht)
        .setFooter(`© Designity 2020`)

    message.channel.send(`${message.author} You have made successfully a review! :white_check_mark: `);
    return reviewchannel.send(review);

}

module.exports.help = {
    name: "review",
    description: "Stuur een review in het review kanaal"
};