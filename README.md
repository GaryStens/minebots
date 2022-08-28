**minebots** is a wrapper made for creating **Minecraft** bots!

Get started by install this module and the required module:
```
npm install minebots
npm install minecraft-bots
```

and here is the code:
```
const { Bot } = require('minebots');

let bot = new Bot(<any>);

bot.on('login', () => {
  bot.getPacket({
    name: 'chat',
    message: 'I said hello!'
  });
});
```
