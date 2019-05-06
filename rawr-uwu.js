const Discord = require ("discord.js"); // discord client
const client = new Discord.Client(); // discord client
const settings = require('./settings.json')
var fs = require("fs")
var text = fs.readFileSync("./rawr.txt").toString('utf-8')
var PicData = text.split('\n');

function Rand(data) {
  // where data is the array
  return data[Math.floor(Math.random() * data.length)]
}

client.on("ready", () => {
  console.log("sinister laughing is heard!")
  client.user.setStatus("online")
});
client.on("message", message => {
  if (message.author.bot) return;
  if (message === null) return;
  if (message.isMentioned(client.user.id)) {
    message.reply("XD")
  }
  if (message.content.startsWith("r info")) {
    message.reply(` i send memes \ntype \`r pic\` to get a meme`)
  }
  if (message.content.startsWith("r pic")) {
    message.reply(Rand(PicData));
  }
})

client.login(settings.tokenuwu);
console.log('Discord listening.')
client.on('error', console.error)
