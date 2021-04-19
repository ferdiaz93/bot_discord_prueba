require('dotenv').config()
const { Client, MessageEmbed } = require('discord.js');
const moment = require('moment'); // require
const fetch = require('node-fetch');
const client = new Client();
const daysQuantity = 2;

let prefix = ".";
// Starting message
client.on("ready", () => {
  console.log("Estoy listo!")
});

//bot answers
client.on("message", async (message) => {
  //if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
  // console.log(message.author)
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  if (message.content.startsWith(prefix + "noticia")) {
    // const messageArray = message.content.split(" ");
    let ourDate = new Date();
    let pastDate = ourDate.getDate() - daysQuantity;
    ourDate.setDate(pastDate);
    
    let firstDate = moment(ourDate).format('YYYY-MM-DD');
    let secondDate = moment().format('YYYY-MM-DD');
    const response = await fetch(`https://api.jornalia.net/api/v1/articles?apiKey=${process.env.APIKEY_JORNALIA}&search=&providers=&categories=&startDate=${firstDate}&endDate=${secondDate}`);
    let data = await response.json();

    let article = data.articles[Math.floor(Math.random() * data.articles.length)];

    while(article.description == null){
      article = articles[Math.floor(Math.random() * articles.length)];
    }
    
    const embed = new MessageEmbed()
      .setTitle(`${article.title} (${article.provider.name})`)
      .setColor(0xff0000)
      .setDescription(article.description ? article.description : 'Vino si descripcion capo, entra al link')
      .setURL(article.sourceUrl)
    message.channel.send(embed);
  }
});

client.login(process.env.TOKEN_APPDISCORD);