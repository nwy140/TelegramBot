const TelegramBot = require('node-telegram-bot-api');
const token = '657236041:AAHgRUZtQTxZe6Jt8S453KZZi0FMwBvuCDw';
const bot = new TelegramBot(token, { polling: true });



bot.onText(/\/roll/g, (msg,match)=>{
    var chatId = msg.chat.id;
    var message = msg.text.toString().toLowerCase();
    var username = msg.chat.first_name;
    var noOfMsg = msg.message_id;

    var split = match.input.split(' ');
    var noOfSides = split[i];

    if(noOfSides === undefined){
        noOfSides='6';
    }

    var rollnumber = dice(noOfSides).toString();
    if (message.includes('roll')) {
      bot.sendMessage(chatId, rollnumber);
    }
});

bot.onText(/\/roll20/g, (msg,match)=>{
    var chatId = msg.chat.id;
    var message = msg.text.toString().toLowerCase();
    var username = msg.chat.first_name;
    var noOfMsg = msg.message_id;
  
    var rollnumber = dice(20).toString();
    if (message.includes('roll')) {
      bot.sendMessage(chatId, rollnumber);
    }
});
function dice(sizes){
    return Math.floor(Math.random() * sizes) + 1;   
} 

