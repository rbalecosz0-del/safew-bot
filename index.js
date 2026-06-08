const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const TOKEN = process.env.TOKEN;

const API = `https://api.safew.bot/bot${TOKEN}`;

app.post("/", async (req, res) => {

    const update = req.body;

    if(update.message){

        const msg = update.message;
        const chat_id = msg.chat.id;

        if(msg.text === "/start"){

            await axios.post(`${API}/sendMessage`, {
                chat_id,
                text: "✅ Bot aktif"
            });
        }
    }

    res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Bot running");
});
