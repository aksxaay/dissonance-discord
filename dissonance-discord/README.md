# dissonance-discord
dissonance discord bots, for extra utility


Install Node.js Locally with [Node Version Manager // nvm](https://heynode.com/tutorial/install-nodejs-locally-nvm/)


- tried using nodeenv, shii didn't work.

```
$ nvm use system
$ npm uninstall -g a_module

```
basically this is how you uninstall from the system Node


there's also difference between node and node.js

![node/nodejs // versions](node_versions.png)


also installed nvm through 


then you just gotta invite your own bot
instructions to [self-invite](https://discordpy.readthedocs.io/en/stable/discord.html)





`/home/axsae/Documents/coding_projects/git/dissonance-discord/dissonance-discord/bih-sniper/package.json`

this is how scripts are named and executed.

```
{
	"name": "sniper",
	"version": "1.0.0",
	"description": "An easy to run simple bot that lets you snipe messages in your Discord server.",
	"main": "src/index.js",
	"scripts": {
		"register": "node scripts/register.js",
		"bot": "node src/index.js",
		"prettier": "prettier --write \"**/*.js\""
	},
	"repository": {
		"type": "git",
		"url": "git+https://github.com/DankMemer/sniper.git"
	},
	"author": "badosz0 <m@badosz.com>",
	"license": "MIT",
	"bugs": {
		"url": "https://github.com/DankMemer/sniper/issues"
	},
	"homepage": "https://github.com/DankMemer/sniper#readme",
	"dependencies": {
		"@discordjs/rest": "^0.1.0-canary.0",
		"discord.js": "^13.1.0"
	}
}

```


Need to install 

`npm install dotenv`
to load .env files from the project directory



Apparently I'm supposed to be using `yarn` and not `npm`

also installed `discordjs/rest` and `discord-api-types`
\
\
\
\
**Q1. What is a token, anyway?**
> A token is essentially your bot's password; it's what your bot uses to login to Discord. With that said, it is vital that you do not ever share this token with >anybody, purposely or accidentally. If someone does manage to get a hold of your token, they can use your bot as if it were theirs—this means they can perform malicious >acts with it.

**I think .gitignore is just relative path anyways**


![watch pong](ping_slash.png)

>Discord allows developers to register slash commands, which provide users a first-class way of interacting directly with your application. Before being able to reply to a command, you must first register it.


![start / dev scripts](scripts.png)
```
npm run start
```

also installed nodemon
`npm install nodemon`

`const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});`