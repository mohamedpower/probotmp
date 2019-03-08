const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message' , message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "ping")) {

 message.channel.send('pong').then((msg) => {

var PinG = ${Date.now() - msg.createdTimestamp}

var ApL = ${Math.round(client.ping)}

      msg.edit(\``javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.````);

 })

  }  

 });

     
client.login(process.env.BOT_TOKEN);
