const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./lunar-pictures.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("flap flap")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("Alive")
  }
  if (message.content.startsWith("l info")) {
    message.reply(`an image bot for pictures of animals.\nType \`l pic\` to get a picture!`)
  }
  if (message.content.startsWith("l pic")) {
    message.reply(Rand(PicData));
  }

})

client.login(settings.tokenmoth);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
