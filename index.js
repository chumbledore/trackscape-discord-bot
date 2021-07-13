const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
dotenv.config();


client.on('message', async message => {
	// Join the same voice channel of the author of the message
	if(message.content.startsWith('huh')) {
		await message.channel.send('nah dog you you');
	}
});


client.login(process.env.TOKEN);

