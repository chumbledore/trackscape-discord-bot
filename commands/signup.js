function sendHelp(message) {
	message.channel.send('Here to help. Maybe...');
}


module.exports = {
	name: 'signup',
	description: 'sign up to start tracking',
	execute(message, args) {
		if(args.length === 0 || args[0] === '' || args[0] === 'help') {
			sendHelp(message);
		}
		else {
			const webRequest = {
				clanName: args[0],
				runescapeUserSignUp: args[1],
			};

			Object.keys(webRequest).forEach(key => {
				if(typeof webRequest[key] === undefined) {
					message.channel.send('Hey dude theres nothign here for x(json object name)');
				}
			});

			message.channel.send(`argument1: ${args[0]} argument2: ${args[1]} username: ${message.author.username}`);
		}
	},
};
