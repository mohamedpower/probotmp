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

client.on('message',async message => {

  if(message.author.bot || message.channel.type === 'bc') return;

  let args = message.content.split(' ');

  if(args[0] === bc) {

    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');

    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');

 

    let msgCount = 0;

    let errorCount = 0;

    let successCount = 0;

    message.channel.send(- [ bookmark :: ${msgCount} ] ・عدد الرسائل المرسلة\n- [ inbox_tray :: ${successCount} ] ・عدد الرسائل المستلمة\n- [ outbox_tray :: ${errorCount} ]・عدد الرسائل الغير مستلمة).then(msg => {

      message.guild.members.forEach(g => {

        g.send(args.slice(1).join(' ')).then(() => {

          successCount++;

          msgCount++;

          msg.edit(- [ bookmark :: ${msgCount} ] ・عدد الرسائل المرسلة\n- [ inbox_tray :: ${successCount} ] ・عدد الرسائل المستلمة\n- [ outbox_tray :: ${errorCount} ]・عدد الرسائل الغير مستلمة);

        }).catch(e => {

          errorCount++;

          msgCount++;

          msg.edit(- [ bookmark :: ${msgCount} ] ・عدد الرسائل المرسلة\n- [ inbox_tray :: ${successCount} ] ・عدد الرسائل المستلمة\n- [ outbox_tray :: ${errorCount} ]・عدد الرسائل الغير مستلمة);

        });

      });

    });

  }

});
     
client.login(process.env.BOT_TOKEN);
