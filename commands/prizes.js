const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You don't have permission to do this.")

    var prizes = new discord.MessageEmbed()
    .setColor("#ffffff")
        .setTitle(":shopping_bags:  Designity products:")
        .setDescription(` **Banners** 
        ︱ Banner - Normal - € 3,50
        • Do you need a banner for your channel? Then this is the choice for you!
        
        ︱ Banner - Advanced - € 7,50
        • Do you need a more advanced banner with many effects for your channel? Then this is the choice for you!
        
         **Logos** 
        ︱ Logo - Simple - :fire: € 1
        • Do you need a simple logo for your channel? Then this is the best choice for you!
        
        ︱ Logo - High - € 3
        • Do you need a more advanced logo for your channel? Then this is the best choice for you!
        
         **Thumbnails** 
        ︱Thumbnail - Simple - € 1
        • Do you need a simple thumbnail for your video? Then this is the best choice for you!
        
        ︱Thumbnail - Normal - € 1,75
        • Do you need a more advanced thumbnail for your video? Then this is the best choice for you!
        
         **Custom Designs **
        ︱ Custom - Design - €?
        • Do you need a design? Create a ticket!

        **Donate money?** 
        Do you want to support Designity with a small donation? That's possible, just create a ticket! This is not mandatory.
        https://www.paypal.com/paypalme/Designityy
        `)
        
        .setFooter("© Designity 2020");
 
    return message.channel.send(prizes);
}
 
module.exports.help = {
    name: "prizes",
    aliases: "prizes",
    description: "Maak een prizes aan"
}