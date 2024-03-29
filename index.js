const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();
const prefix = process.env.PREFIX;


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const messageSplit = message.content.slice(prefix.length).trim().split(/ +/);
	const command = messageSplit.shift().toLowerCase();

	// HACK ¯\_(ツ)_/¯
	const justArgsString = message.content.replace(`${prefix}${command}`, '').trim();
	const args = justArgsString.split(',');

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});


client.login(process.env.TOKEN);

