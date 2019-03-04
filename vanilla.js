const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')

client.on("ready", () => {
  console.log("Vanilla is here nya!")
  client.user.setStatus("online")
});


client.login(settings.token-vanilla);
console.log('Discord listening.')
client.on('error', console.error)
