const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')



client.on("ready", () => {
  console.log("Chocola is here nya!")
  client.user.setStatus("online")
});


client.login(settings.tokenchocola);
console.log('Asset Chocola init complete')
client.on('error', console.error)
