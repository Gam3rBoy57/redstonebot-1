const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} on ${bot.guilds.cache.size} servers.`);

    // Generate invite
    bot.generateInvite(8).then(invite => {
        console.log(`You can invite me with ${invite}`);
    });

    // Set activity
    bot.user.setActivity('mit dir.', {
        type: 'PLAYING'
    });
});

bot.login(process.env.TOKEN);