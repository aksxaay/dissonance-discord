/* 

This comes from 
https://discordjs.guide/creating-your-bot/#creating-the-main-file


*/
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const { token } = require('../config.json');
const command = require('./command.js')
require("dotenv").config();


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }



// When the client is ready, run this code (only once)
// command.js
client.on('ready', () => {
	console.log('command.js is ready!');
	command(client, ['ping', 'pong'], message => {
		message.channel.send('Pong bitches!')
	})
});

// // message event trigger
// client.on('messageCreate', (message) => {
// 	console.log(message.content)
// 	command(client, ['ping', 'pong', 'test'], message => {
// 		message.channel.send('Pong bitches!')
// 	})
// });




// // User Info command /user
// client.on('interactionCreate', async interaction => {
// 	console.log(`${interaction.commandName} is being executed!`);
// 	if (!interaction.isCommand()) return;

// 	const { commandName } = interaction;

// 	if (commandName === 'ping') {
// 		await interaction.reply('Pong mf!');
// 		await new Promise(r => setTimeout(r, 2000));
// 		await interaction.editReply('Pong again!');
// 	} else if (commandName === 'server') {
// 		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
// 	} else if (commandName === 'user') {
// 		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
// 	}

// 	if (commandName === 'ephemeral') {
// 		await interaction.reply({content: 'Ephemeral!', ephemeral: true})
// 	}
// });

// Login to Discord with your client's token
client.login(token);


// INSTRUCTIONS
/* 
This is how you create a client instance for your Discord bot and login to Discord. The Intents.FLAGS.GUILDS intents option is necessary for your client to work properly.

Open your terminal and run node index.js to start the process. If you see "Ready!" after a few seconds, you're good to go!
*/