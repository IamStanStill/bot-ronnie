const CLIENT_ID = process.env.CLIENT_ID
const BOT_TOKEN = process.env.BOT_TOKEN

const SoundBot = require('discord-soundbot');

const myBot = new SoundBot({
  clientId: CLIENT_ID,
  token: BOT_TOKEN,
  prefix: '.ron ',
  deleteMessages: true,
  game: "with my bumhole"
});
myBot.start();