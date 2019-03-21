const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')

client.on("ready", () => {
  console.log("Vanilla is here nya!")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("I am online!")
  }



})

client.login(settings.tokenvanilla);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
