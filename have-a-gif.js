const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./gif.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("!")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("I am online!")
  }
  if (message.content.startsWith("g info")) {
    message.reply(`hello, i send gifs .\nType \`g pic\` to get a gif`)
  }
  if (message.content.startsWith("g pic")) {
    message.reply(Rand(PicData));
  }

})

client.login(settings.tokengif);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
