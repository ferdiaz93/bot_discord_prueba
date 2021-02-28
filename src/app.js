require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();

let prefix = ".";
// Starting message
client.on("ready", () => {
    console.log("Estoy listo!")
});

//bot answers
client.on("message", (message) => {
    //if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;
    console.log(message.author)
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else if (message.content.startsWith("efe")) {
        message.channel.send("testing");
        fetch('https://efemerides20.com/api/v2/efemerides?month=2&day=27&limit=50&type=event"', {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
});


client.login(process.env.TOKEN_APPDISCORD);