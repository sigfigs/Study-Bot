const Discord = require("discord.js");
const { Client, Intents, MessageCollector, MessageEmbed } = require("discord.js");
const ScienceQuizCat = require("../ScienceQuizCat.js");
const Codebusters = require("../Codebusters.js");
const fs = require("fs");
const { buzzed1, buzzed2 } = require("../index.js");

module.exports = {
   name: "!buzz",
   description: "Allows players to buzz.",
   get1: () => k1,
   get2: () => k2,
   buzzed1: () => k1 = "jeffeyiscool",
   buzzed2: () => k2 = "jeffeyiscool",

   execute(message) {
      let k1 = "bz";
      let k2 = "buzz";
      let admins = [
         "Johann#5854",
         "Jeffrey#4036",
         "universalgreen#0832",
         "jtincan#1777",
         "∫Borya dB#0332",
         "julianne#5223",
         "kothandaraman_j#6677",
         "Sarjona#8530",
         "aku#3843",
         "caiseau#7555",
         "Alison#2123",
         "thegroundsloth#7907",
         "[Prepar3D]#8003",
         "dommymommy#7238",
         "MAK783#5450",
      ];
      let participants = [];
      let participantScores = [];

      const Meow = new ScienceQuizCat(k1, k2, admins, participants, participantScores);

      const exampleEmbed = new MessageEmbed()
         .setColor("YELLOW")
         .setTitle("Science Quiz Cat Detected a Buzz...")
         .setImage("https://i.imgur.com/vtIy9TD.jpg")
         .setTimestamp();

      message.channel.send({ embeds: [exampleEmbed] });
      message.channel.send("`" + message.author.username + "`" + " has buzzed.");
      Meow.k1 = "jeffeyiscool";
      Meow.k2 = "jeffeyiscool";


      message.channel
         .send("You have 10 seconds to answer.")
         .then((message) => {
            setTimeout(
               () => message.channel.send("Your 10 seconds are up."),
               10000
            );
         })
         .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
   }
}