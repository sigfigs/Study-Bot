const Discord = require("discord.js");
const { Client, Intents, MessageCollector, MessageEmbed } = require("discord.js");
const fs = require("fs");


module.exports = {
   name: "!8ball",
   description: "Sends a fortune to the user.",
   execute(message) {
      const fortunes = [
         "It is certain",
         "Without a doubt",
         "You may rely on it",
         "Yes definitely",
         "It is decidedly so",
         "As I see it, yes",
         "Most likely",
         "Yes",
         "Outlook good",
         "Signs point to yes",
         "Reply hazy try again",
         "Better not tell you now",
         "Don’t count on it",
         "Outlook not so good :(",
         "My sources say no",
         "Very doubtful",
         "My reply is no",
         "stfu nerd",
         "Of course!",
         "Yes",
         "Yesn't",
         "hmmmmmmmmmmmmmmmmmmmmmmm",
         "jeffey is the best mod"
      ];

      let username = message.author.username;
      let fortune = fortunes[Math.round(Math.random() * fortunes.length)];
      const exampleEmbed = new MessageEmbed()
         .setColor("#0099ff")
         .setTitle("8ball predicts...")
         .setThumbnail("https://i.imgur.com/nkt1bob.png")
         .setDescription("**" + username + "'s fortnue: " + "**" + fortune)
         .setTimestamp()
      message.channel.send({ embeds: [exampleEmbed] });
   }
}