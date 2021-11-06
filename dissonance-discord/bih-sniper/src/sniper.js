/*
this is the source code for the dank bot on github
*/





const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
	],
	partials: ["MESSAGE", "REACTION", "USER"],
});
const { token } = require("../config.json");

const snipes = {};
const editSnipes = {};
const reactionSnipes = {};

const formatEmoji = (emoji) => {
	return !emoji.id || emoji.available
		? emoji.toString() // bot has access or unicode emoji
		: `[:${emoji.name}:](${emoji.url})`; // bot cannot use the emoji
};

client.on("ready", () => {
	console.log(`[sniper] :: Logged in as ${client.user.tag}.`);
});

client.on("messageDelete", async (message) => {
	if (message.partial || (message.embeds.length && !message.content)) return; // content is null or deleted embed

	snipes[message.channel.id] = {
		author: message.author,
		content: message.content,
		createdAt: message.createdTimestamp,
		image: message.attachments.first()
			? message.attachments.first().proxyURL
			: null,
	};
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
	if (oldMessage.partial) return; // content is null

	editSnipes[oldMessage.channel.id] = {
		author: oldMessage.author,
		content: oldMessage.content,
		createdAt: newMessage.editedTimestamp,
	};
});

client.on("messageReactionRemove", async (reaction, user) => {
	if (reaction.partial) reaction = await reaction.fetch();

	reactionSnipes[reaction.message.channel.id] = {
		user: user,
		emoji: reaction.emoji,
		messageURL: reaction.message.url,
		createdAt: Date.now(),
	};
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const channel =
		interaction.options.getChannel("channel") || interaction.channel;

	if (interaction.commandName === "snipe") {
		const snipe = snipes[channel.id];

		if (!snipe) return interaction.reply("There's nothing to snipe!");

		const embed = new MessageEmbed()
			.setAuthor(snipe.author.tag)
			.setFooter(`#${channel.name}`)
			.setTimestamp(snipe.createdAt);
		snipe.content ? embed.setDescription(snipe.content) : null;
		snipe.image ? embed.setImage(snipe.image) : null;

		await interaction.reply({ embeds: [embed] });
	} else if (interaction.commandName === "editsnipe") {
		const snipe = editSnipes[channel.id];

		await interaction.reply(
			snipe
				? {
						embeds: [
							new MessageEmbed()
								.setDescription(snipe.content)
								.setAuthor(snipe.author.tag)
								.setFooter(`#${channel.name}`)
								.setTimestamp(snipe.createdAt),
						],
				  }
				: "There's nothing to snipe!"
		);
	} else if (interaction.commandName === "reactionsnipe") {
		const snipe = reactionSnipes[channel.id];

		await interaction.reply(
			snipe
				? {
						embeds: [
							new MessageEmbed()
								.setDescription(
									`reacted with ${formatEmoji(
										snipe.emoji
									)} on [this message](${snipe.messageURL})`
								)
								.setAuthor(snipe.user.tag)
								.setFooter(`#${channel.name}`)
								.setTimestamp(snipe.createdAt),
						],
				  }
				: "There's nothing to snipe!"
		);
	} 
	// CARTIFY
	else if (interaction.commandName === "she-wanna-be-carti") {
		let inputString = // find someway to read the argument along with the message as string

		function cartize(input) {
			var newString = "";
			var wordArr = input.split(" ");
		
			wordArr.map((word) => {
				var randomNumWord = Math.floor(Math.random() * 9 + 1);
		
				if (word === "for" && randomNumWord != 5) {
					newString += "4";
				} else {
					for (var i = 0; i < word.length; i++) {
						var randomNumChar = Math.floor(Math.random() * 2 + 1);
						var char = word.charAt(i);
						var nextChar = word.charAt(i + 1);
						var prevChar = word.charAt(i - 1);
		
						if (i === 0) {
							newString += char.toLowerCase();
						} else if (
							(char === "e" || char === "E") &&
							randomNumChar === 2
						) {
							newString += "3";
						} else if (char === "o" || char === "O") {
							newString += "0";
						} else if (
							char.toUpperCase() === nextChar.toUpperCase() ||
							char.toUpperCase() === prevChar.toUpperCase()
						) {
							newString += char.toUpperCase();
						} else {
							if (randomNumChar === 2) {
								newString += char.toUpperCase();
							} else {
								newString += char.toLowerCase();
							}
						}
					}
				}
		
				if (randomNumWord === 2) {
					newString += " . ";
				} else if (randomNumWord === 4) {
					newString += " > ";
				} else if (randomNumWord === 3) {
					newString += " ! ";
				} else {
					newString += " ";
				}
			});
		
			var randomEmojiNum = Math.floor(Math.random() * 11 + 1);
		
			if (randomEmojiNum === 5) {
				newString += " &#128139";
			} else if (randomEmojiNum === 8) {
				newString += " &#128149";
			} else if (randomEmojiNum === 10) {
				newString += " &#128149 &#128139";
			}
		
			console.log(newString);
		
			return newString;
		}
		const embed = new MessageEmbed()
			// .setAuthor(snipe.author.tag)
			.setFooter(`#${channel.name}`)
			// .setTimestamp(snipe.createdAt);
		snipe.content ? embed.setDescription(cartize(inputString)) : null; // carti string input
		// snipe.image ? embed.setImage(snipe.image) : null;

		await interaction.reply({ embeds: [embed] });
	}
});

client.login(token);
