const TelegramBot = require('node-telegram-bot-api');
const token = '657236041:AAHgRUZtQTxZe6Jt8S453KZZi0FMwBvuCDw';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
  var chatId = msg.chat.id;
  var message = msg.text.toString().toLowerCase();

  if (message.includes('happy birthday')) {
    bot.sendMessage(chatId, 'thank you! \n A birthday is the anniversary of the birth of a person, or figuratively of an institution. Birthdays of people are celebrated in numerous cultures, often with birthday gifts, birthday cards, a birthday party, or a rite of passage.');
  }
});