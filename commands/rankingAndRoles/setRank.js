module.exports = {
	name: 'setrank',
	description: 'Set discord role, if user has permission',
	args: true,
	usage: '<clan member>, <new rank>',
	execute(message, args) {
		const user = message.guild.members.cache.get(args[0]);
		const newRole = message.guild.roles.cache.find(role => role.name === args[1]);
	},
};
