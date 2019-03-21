const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')


client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("Chocala is here, yes Hii!!")
  }
  if (message.content.startsWith("c info")) {
    message.reply(`hiya , Chocola here! I am a NSFW image bot, please understand that i am still in development.NYA.\ntype \`c pic\` to get a picture!`)
  }
});

client.on("ready", () => {
  console.log("Chocola is here nya!")
  client.user.setStatus("online")
});


client.login(settings.tokenchocola);
console.log('Asset Chocola init complete')
client.on('error', console.error)
