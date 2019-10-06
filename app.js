require('dotenv').config()
const Discord = require("discord.js")
const client = new Discord.Client();

let prefix = ".";
// Mensaje al conectar con el servidor
client.on("ready", () => {
    console.log("Estoy listo!")
});

//aca se manejan las respuestas del bot
client.on("message", (message) => {
    //if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else if (message.content.startsWith("pelotudo") || message.content.startsWith("PELOTUDO") || message.content.endsWith("pelotudo") || message.content.endsWith("PELOTUDO")) {
        message.channel.send("probando");
    } else if (message.content.startsWith("mogolico") || message.content.startsWith("MOGOLICO") || message.content.endsWith("mogolico") || message.content.endsWith("MOGOLICO")) {
        message.channel.send("se enojó");
    } else if (message.content.startsWith("imbecil") || message.content.startsWith("IMBECIL") || message.content.endsWith("imbecil") || message.content.endsWith("IMBECIL")) {
        message.channel.send("se enojó");
    } else if (message.content.startsWith("puto") || message.content.startsWith("PUTO") || message.content.endsWith("puto") || message.content.endsWith("PUTO")) {
        message.channel.send("se enojó");
    } else if (message.content.startsWith("retrasado") || message.content.startsWith("RETRASADO") || message.content.endsWith("retrasado") || message.content.endsWith("RETRASADO")) {
        message.channel.send("se enojó");
    } else if (message.content.startsWith("mierda") || message.content.startsWith("MIERDA") || message.content.endsWith("mierda") || message.content.endsWith("MIERDA")) {
        message.channel.send("se enojó");
    }
});


client.login(process.env.TOKEN_APPDISCORD);