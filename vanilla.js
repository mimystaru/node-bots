const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')

client.on("ready", () => {
  console.log("Vanilla is here nya!")
  client.user.setStatus("online")
});


client.login(settings.tokenvanilla);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
