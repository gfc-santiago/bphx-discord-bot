function infoHandler(msg) {
	msg.channel.send(`BPHX Bot ver. ${process.env.VERSION}`);
}

module.exports = infoHandler;