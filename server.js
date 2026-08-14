const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

const token = process.env.BOT_TOKEN || "YOUR_BOT_TOKEN";
const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "স্বাগতম! আপনার ইনকাম মিনি অ্যাপে প্রবেশ করতে নিচের বাটনে ক্লিক করুন:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🚀 Open App & Earn", web_app: { url: "https://your-app-url.com" } }]
            ]
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
