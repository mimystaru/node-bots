const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./chocola-pictures.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}


client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("Chocala is here, yes Hii!!")
  }
  if (message.content.startsWith("c info")) {
    message.reply(`hiya , Chocola here! I am a NSFW image bot, please understand that i am still in development.NYA.\ntype \`c pic\` to get a picture!`)
  }
  if (message.content.startsWith("c pic")) {
    message.reply(Rand(PicData));
 }
});

client.on("ready", () => {
  console.log("Chocola is here nya!")
  client.user.setStatus("online")
});


client.login(settings.tokenchocola);
console.log('Asset Chocola init complete')
client.on('error', console.error)
