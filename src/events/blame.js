module.exports = async (msg) => {
	// Server message
	if (msg.author.id === process.env.APP_ID) return;

	const [command, ...args] = msg.content.split(' ');
	if (command.toLowerCase() === 'valo') {
		const nameMap = {
			'Daryl': ['794938337521172530', 'daryl'],
			'Chester': ['723009492530495538', 'daryl'],
			'Abel': ['856010849872248862', 'abel'],
			'Acepot': ['345604703805243393', 'acepot'],
			'Hans': ['538181139823853578', 'hans'],
			'Gello': ['566598676705705986', 'gello'],
			'Abbe': ['425148719017623579', 'abbe'],
		};
		const namesTagged = [];
		for (const index in args) {
			const arg = args[index];
			for (const name in nameMap) {
				const [ id, nickname ] = nameMap[name];
				if (arg === `<@${id}>` || arg.toLowerCase() === nickname) {
					namesTagged.push(name);
				}
			}
		}
		if (namesTagged.length > 0) {
			const singular = `Ayaw tayo kalaro niyan.\nGanyan tlga yan si ${namesTagged[0]} mula pagkabata!`;
			const plural = `Ayaw tayo kalaro ng mga yan.\nGanyan tlga yan sila ${namesTagged.join(' at ')} mula pagkabata!`;
			msg.channel.send(namesTagged.length === 1 ? singular : plural);
		}
	}
};