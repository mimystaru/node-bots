const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./boos-pictures.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("nyahhaha")
  client.user.setStatus("online")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("I am online!")
  }
  if (message.content.startsWith("b info")) {
    message.reply(`an image bot. in development, sends trippy stuff.\nType \`b pic\` to get a picture!`)
  }
  if (message.content.startsWith("b pic")) {
    message.reply(Rand(PicData));
  }

})

client.login(settings.tokenboo);
console.log('Asset Vanilla init complete.')
client.on('error', console.error)
