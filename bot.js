const fs = require('fs'); // npm i fs

const ms = require('ms'); // npm i ms

const cool = [];

client.on('message',async message => {

  if(message.author.bot) return;

  if(message.channel.type === 'dm') return;

 

  const args = message.content.split(' ');

  const credits = require('./credits.json');

  const path = './credits.json';

  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;

  const mentionn = message.mentions.users.first() || client.users.get(args[1]);

  const author = message.author.id;

  const balance = args[2];

  const daily = Math.floor(Math.random() * 350) + 10;

 

  if(!credits[author]) credits[author] = {credits: 50};

  if(!credits[mention.id]) credits[mention.id] = {credits: 50};

  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

 

 

  if(message.content.startsWith(prefix + "credit")) {

  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;

 

  if(args[2]) {
    message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);

        }

      });

    });

  }

  if(!args[2]) {

    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);

    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);

  }

 

  }
  if(message.content.startsWith(prefix + "daily")) {

    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`);

    if(mentionn) {

      var one = Math.floor(Math.random() * 9) + 1;

      var two = Math.floor(Math.random() * 9) + 1;

      var three = Math.floor(Math.random() * 9) + 1;

      var four = Math.floor(Math.random() * 9) + 1;

 

      var number = `${one}${two}${three}${four}`;
      message.channel.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`).then(async m => {

        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {

          if(collected.first().content === number) {

            m.delete();

            collected.first().delete();

            credits[mentionn.id].credits += (+daily);

            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

 

          message.channel.send(`**:atm: | \`${daily}\`, تم تسليم المبلغ**`);  

          }

          if(collected.first().content !== number) {

            return m.delete();

          }

        });

      });
      } else if(!mentionn) {

      credits[author].credits += (+daily);

      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});

 

      message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);

    }

    cool.unshift(message.author.id);

 

    setTimeout(() => {

      cool.shift(message.author.id);

      message.author.send("**:atm: | \`Daily\`, يمكنك الحصول على الكردت المجانية الان**").catch();

    }, ms("1d"));

  }

});

client.login(process.env.BOT_TOKEN);
