const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const token = '8745590357:AAGTTgg9kJ8ny23426AiRU2HB_LlG1hD4mI';
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'স্বাগতম! Taka Earn বটে আপনাকে স্বাগতম। নিচের বাটনে ক্লিক করে কাজ শুরু করুন। 👇', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🚀 অ্যাপ ওপেন করুন (Earn App)',
            web_app: { url: 'https://earnify-bot.onrender.com' }
          }
        ]
      ]
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Taka Earn Bot is running successfully...');
});
