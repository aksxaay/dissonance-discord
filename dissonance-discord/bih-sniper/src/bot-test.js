/* 

Create a Discord Bot with Node.js

*/

// dotenv package
require("dotenv").config();

console.log(process.env.DISCORDJS_BOT_TOKEN);

// Register a slash command against the Discord API?
// slash commands are messages that trigger a HTTP request to a web service.

// function
const { REST } = require("@discordjs/rest");
// object
const { Routes } = require("discord-api-types/v9");
const { token, applicationId } = require('../config.json');

// console.log(typeof REST, typeof Routes)

// some sort of dynamic dictionary. commands[0] instances
const commands = [
	{
		name: "ping",
		description: "Replies with pong!",
	},
];

// i had set the token to damn string bruh
const rest = new REST({ version: "9" }).setToken(token);

console.log(rest.cdn);

let simple_var = "okay okay okay okay";

// okay okay okay okay first format on save
// format document on Ctrl + Shift + I
(async () => {
	try {
	  console.log('Started refreshing application (/) commands.');
  
	  await rest.put(
		Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
		{ body: commands },
	  );
  
	  console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
	  console.error(error);
	}
  })();