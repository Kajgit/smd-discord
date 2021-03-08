const Discord = require('discord.js');

// Module Exports
module.exports = {

    // Help
    help: {
        name: 'order',
        description: 'Vraag de helplijst op.',
        cata: 'algemeen'
    },

    // Run
    run: async (bot, message, args) => {

        let questions = ["What kind of product do you want? Check our prices list.", "Which platform is your product for?", "What kind of theme would you like us to handle.", "Do you have a concept in mind? If not, we will process your wishes into a product", "What colors / effects / style do you have in mind? If not, we will come up with this ourselves", "Would you like to add something else?"];
        let answers = [];
        const channel = await message.author.createDM();
             channel.messages.fetch()

             message.reply(`Check your DMs (Don't forget to allow server DMs).`)
        for(let i = 0; i < questions.length; i++) {
            let question = questions[i];
            const channel = await message.author.createDM();
             channel.messages.fetch()
            channel.send(question);
            await channel.awaitMessages(m => m.author.id === message.author.id, { max: 1, time: 60000 })
            .then(msg => {
                msg = msg.first();
                answers.push(msg.content);
            })
            .catch(err => message.reply("You responded to late, try again"));
        }
    
        channel.send("Thanks for your information we will get started!");

        message.guild.channels.create(message.author.username + `-order`, 
{
type: 'text', 
permissionOverwrites: [
        {
         id: "698622362559447221", 
        allow: ['VIEW_CHANNEL'],
        },
        {
        id: message.author.id,
        allow: ['VIEW_CHANNEL']
        }, 
        {
        id: message.guild.id,
        deny: ['VIEW_CHANNEL']
        }
        ]
})
       .then(channel => {
        channel.setParent(`701893834069770362`)

        channel.overwritePermissions([
            {
                id: "698622362559447221", 
                allow: ['VIEW_CHANNEL'],
                },
                {
                id: message.author.id,
                allow: ['VIEW_CHANNEL']
                }, 
                {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
                }
        ]);

        let embed = new Discord.MessageEmbed()
        .setTitle(`**New Order**`)
        .setColor(`#ff4530`)
        .addField(`What kind of product do you want? Check our prices list.`, answers[0])
        .addField(`Which platform is your product for?`, answers[1])
        .addField(`What kind of theme would you like us to handle.`, answers[2])
        .addField(`Do you have a concept in mind? If not, we will process your wishes into a product`, answers[3])
        .addField(`What colors / effects / style do you have in mind? If not, we will come up with this ourselves`, answers[4])
        .addField(`Would you like to add something else?`, answers[5])
        .setFooter(`© Designity 2020`)

        channel.send(embed)

       })
        
    }
}