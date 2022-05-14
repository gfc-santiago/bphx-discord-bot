const commands = require('../commands');
const PREFIX = process.env.PREFIX;

module.exports = async (msg) => {
	// Server message
	if (msg.author.id === process.env.APP_ID) return;

	const [commandStr, ...args] = msg.content.split(' ');

	// Invalid prefix
	if (commandStr.substring(0, PREFIX.length) !== PREFIX) return;

	const command = commandStr.substring(PREFIX.length);

	if (!commands[command]) {
		await commands.invalid(msg, command, args);
	}
	else {
		console.log(`@${msg.author.username} - ${msg.content}`);
		await commands[command](msg, command, args);
	}
};