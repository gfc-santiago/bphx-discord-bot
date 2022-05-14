const { Client, Intents } = require('discord.js');
require('dotenv').config();
const onMessageCreate = require('./events/message');
const onBlame = require('./events/blame');
const onReady = require('./events/ready');

const intents = [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MESSAGES,
];

const client = new Client({ intents });

client.once('ready', onReady);

client.on('messageCreate', onMessageCreate);
client.on('messageCreate', onBlame);

client.login(process.env.BOT_TOKEN);