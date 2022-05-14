const { getHelpMessage } = require('./help');

function invalidHandler(msg, cmd) {
	msg.channel.send(`Invalid Command - ${cmd}\n${getHelpMessage(cmd)}`);
}

module.exports = invalidHandler;