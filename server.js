const TelegramBot = require('node-telegram-bot-api');

const token = '8745590357:AAGTTgg9kJ8ny23426AiRU2HB_LlG1hD4mI';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'স্বাগতম! Taka Earn বটে আপনাকে স্বাগতম। নিচের বাটনে ক্লিক করে কাজ শুরু করুন। 👇', {
    reply_markup: {
      inline_keyboard: [
        [{ text: '🚀 অ্যাপ ওপেন করুন (Earn App)', web_app: { url: 'https://earnify-bot.onrender.com' } }]
      ]
    }
  });
});

console.log('Taka Earn Bot is running successfully...');
