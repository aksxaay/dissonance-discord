/* 

Create a Discord Bot with Node.js

*/

// dotenv package
require('dotenv').config();

console.log(process.env.DISCORDJS_BOT_TOKEN)


// Register a slash command against the Discord API?
// slash commands are messages that trigger a HTTP request to a web service.


// function
const { REST } = require('@discordjs/rest');
// object
const { Routes } = require('discord-api-types/v9');

// console.log(typeof REST, typeof Routes)

// some sort of dynamic dictionary. commands[0] instances
const commands = [{
    name: 'ping',
    description: 'Replies with pong!'
}];

const rest = new REST({ version: '9' }).setToken('token');

console.log(rest.cdn)



