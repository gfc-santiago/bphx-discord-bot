async function helpHandler(msg, cmd, args) {
	msg.channel.send(getHelpMessage(cmd, args));
}

function getHelpMessage(cmd, args) {
	const lines = ['BPHX Help'];
	if (args) {
		lines.push([args.join(' ')]);
	}
	return lines.join('\n');
}

module.exports = helpHandler;
module.exports.getHelpMessage = getHelpMessage;