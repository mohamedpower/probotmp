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

client.on('message', message => {

 

    if(message.content.startsWith(prefix + 'rep')) {

      if(!message.channel.guild) return;

                    moment.locale('en');

                  var getvalueof = message.mentions.users.first()

                    if(!getvalueof) return message.channel.send(`**🔍 |  ${message.author.username}, the user could not be found.    **`);

                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)

    if(profile[message.author.id].reps != moment().format('L')) {

            profile[message.author.id].reps = moment().format('L');

            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);

         message.channel.send(`** 🆙  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)

        } else {

         message.channel.send(`**⏱ |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)

        }

       }

       fs.writeFile('profile.json', JSON.stringify(profile), (err) => {

if (err) console.error(err);

})

});

     
client.login(process.env.BOT_TOKEN);
