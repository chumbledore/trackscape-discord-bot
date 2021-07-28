const Discord = require('discord.js');

const helpEmbed = new Discord.MessageEmbed()
	.setColor('#1a6ba1')
	.setTitle('Sign up your clan with Runelite!')
	.setDescription('??signup commnand help')
	.addFields(
		{ name: '\u200b', value: '\u200b' },
		{ name: 'Example usage', value: '??signup <clan name>, <clan leader>' },
		{ name: '\u200b', value: '\u200b' },
		{ value: 'We will handle the rest!' },
	)
	.setImage('https://i.imgur.com/dHamuVH.jpeg')
	.setTimestamp();

function sendHelp(message) {
	message.channel.send(helpEmbed);
}

// ??signup x, y
module.exports = {
	name: 'signup',
	description: 'sign up to start tracking',
	args: true,
	usage:'<clan Name>, <clan Leader>',
	execute(message, args) {
		if(args[0] === '' || args[0] === 'help') {
			// Make help embed vvv
			sendHelp(message);
		}
		else {
			const trimmedArgs = args.map(arg => arg.trim());

			const server = message.guild.id;
			const channel = message.channel.id;
			const user = message.author.id;

			const webRequest = {
				name: trimmedArgs[0],
				discordId: server,
				discordChannelId: channel,
				discordIdOfCreator: user,
				runescapeUserName: trimmedArgs[1],
			};

			Object.keys(webRequest).forEach(key => {
				if(typeof webRequest[key] === undefined) {
					message.channel.send('Sorry! Something went wrong!');
				}
			});

			// Make welcome to Runelite embed vvv
			message.channel.send('Success!');
			console.log(webRequest);
		}
	},
};