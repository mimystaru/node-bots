const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./momiji.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("Awoo!")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("Awoo!")
  }
  if (message.content.startsWith("m info")) {
    message.reply(`hello, i am a stim bot, i send stimmy pictures.\nType \`stim\` to get a stim!`)
  }
  if (message.content.startsWith("stim")) {
    message.reply(Rand(PicData));
  }

})

client.login(settings.tokenmomiji);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
