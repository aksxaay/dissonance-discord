/* 

Create a Discord Bot with Node.js
ORIGINAL BOT
*/

// dotenv package
require("dotenv").config();

const {Client} = require('discord.js');
// had to add intents
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const 	PREFIX = "º";


// Registering Event (READY)
client.on('ready', () => {
	console.log(`${client.user.username} // ${client.user.tag} has logged in!`)
})

client.login(process.env.DISCORDJS_BOT_TOKEN);

// we need to ignore bot self message.
// sent : hello
// reply : hello
client.on('messageCreate', (message) => {
	if (message.author.bot === true) {return}
	console.log(`${message.author.tag} sent a message"${message}"`)
	if(message.content === `oppxi is gae`) {
		message.reply('Indeed!');
	}
	if(message.content.startsWith(PREFIX)) {
		// destructuring args [array] (spreader operator)
		const [CMD_NAME, ...args] = message.content
		.trim()
		.substring(PREFIX.length)
		.split(/\s+/);

		if (CMD_NAME == 'kick') {
			if (message.member.hasPermission('KICK MEMBERS')) 
				return message.reply('You do not have permissions to use the command');
			if (args.length === 0) return message.reply('Please Provide an ID');
			const member = message.guild.members.cache.get(args[0])
			if (member) {
				member
					.kick();
					.then((member) => message.channel.send(`${member} was kicked.`));
					.catch((err) => message.channel.send(`I  do not have the permissions to kick user :(`));
			} else {
				message.reply('That member was not found!')
			}
			message.channel.send(`kicked the user`)
		}
		if (CMD_NAME == 'ban') {
			message.channel.send(`banned the user`)
		}
		console.log(CMD_NAME);
		console.log(args);

	}
	
		

	
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});


// Register a slash command against the Discord API?
// slash commands are messages that trigger a HTTP request to a web service.

