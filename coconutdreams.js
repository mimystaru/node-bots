const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./coconut.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("Coconut is here nya!")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("I am here!")
  }
  if (message.content.startsWith("d info")) {
    message.reply(`hello, pleased to meet you. I am Coconut, an image landscape bot. please be patient with me as i am still in development.nya.\nType \`d pic\` to get a picture!`)
  }
  if (message.content.startsWith("d pic")) {
    message.reply(Rand(PicData));
  }

})

client.login(settings.tokencoconut);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
