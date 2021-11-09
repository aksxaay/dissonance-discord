
// CodeLyon event handler and command handler
const Discord = require('discord.js')
const client = new Discord.Client(
    {
        partials: ["MESSAGE", "CHANNEL", "REACTION"],
        intents: [Discord.Intents.FLAGS.GUILDS]
    }
);

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

// cool array modular importing technique
['command-handler', 'event-handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})
const { token, prefix } = require('../config.json');
require("dotenv").config();

// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (command == 'ding'){
//         message.channel.send('dong!')
//     }
// }) 
client.login(token)

