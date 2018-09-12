const TelegramBot = require('node-telegram-bot-api');
const token = '625464286:AAGBB-JnnaMd_dl0-jzMhnOEdxRP9X9dF1M';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  var chatId = msg.chat.id;
  var message = msg.text.toString().toLowerCase();

  if (message.include('happy birthday')) {
    bot.sendMessage(chatId, 'thank you!');
  }
});