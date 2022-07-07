const Discord = require("discord.js");
const { Client, Intents, MessageCollector, MessageEmbed } = require("discord.js");
const ScienceQuizCat = require("./ScienceQuizCat.js");
const Codebusters = require("./Codebusters.js");
const fs = require("fs");
// const express = require("express");
// const app = express();
// const env = require("./.env");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`${client.user.tag} is running!`);
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./Commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);
  client.commands.set(command.name, command);
}

// app.listen(3000, () => {
//   console.log("Project is running!");
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

//======================================Bot Code========================================================\\
//======================================Bot Code========================================================\\
//======================================Bot Code========================================================\\
//======================================Bot Code========================================================\\
//======================================Bot Code========================================================\\
//======================================Bot Code========================================================\\

client.on("messageCreate", message => {
  if (message.author.bot) return;

  //==========================================Miscellaneous=============================================\\
  //==========================================Miscellaneous=============================================\\
  //==========================================Miscellaneous=============================================\\

  if (message.content === "!help") {
    client.commands.get("!help").execute(message);
  }

  if (message.content.startsWith("!play")) {
    let play = message.content.split(" ");
    let str = "";

    for (let i = 1; i < play.length; i++) {
      str = str + play[i] + " ";
    }

    client.user.setActivity(str);
    message.channel.send("Playing " + str);
  }

  if (message.content.startsWith("!8ball")) {
    client.commands.get("!8ball").execute(message);
  }

  //==========================================Science Quiz Cat ========================================\\
  //==========================================Science Quiz Cat ========================================\\
  //==========================================Science Quiz Cat ========================================\\

  var k1 = "bz";
  var k2 = "buzz";
  var admins = [
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
  participants = [];
  participantScores = [];

  const Meow = new ScienceQuizCat(k1, k2, admins, participants, participantScores);

  module.exports = {
    get1: () => k1,
    get2: () => k2,
    buzzed1: () => k1 = "jeffeyiscool",
    buzzed2: () => k2 = "jeffeyiscool"
  };

  if (message.content.toLowerCase() === k1 || message.content.toLowerCase() === k2) {
    client.commands.get("!buzz").execute(message);
    client.commands.get("!buzz").buzzed1();
    client.commands.get("!buzz").buzzed2();

  }

  if (message.content === "!randsub" || message.content === "!randomsubject") {
    message.channel.send(Meow.randomSubject());
  }

  if (message.content === "!lead") {
    message.channel.send(Meow.formatLeaderboard());
  }

  if (message.content === "!clearlead" && admins.includes(message.member.user.tag.toString())) {
    participants = [];
    participantScores = [];
    message.channel.send(Meow.formatLeaderboard());
  }

  if (message.content.toLowerCase() === "!b" && admins.includes(message.member.user.tag.toString())) {
    message.channel.send("Please buzz below:" + "\n--------------------------------------------------");
    k1 = "bz";
    k2 = "buzz";
  }

  if (message.content === "!updatelead") {
    let team = message.content.split(" ")[1];
    let sign = message.content.split(" ")[2];
    let scoreChange = parseInt(message.content.split(" ")[3]);

    Meow.update(team, sign, scoreChange);

    message.channel.send(Meow.formatLeaderboard());
    message.channel.send("Leaderboard updated. Use " + "`" + "!lead" + "`" + " to access the standings.");
  }

  //======================================Codebusters=====================================================\\
  //======================================Codebusters=====================================================\\
  //======================================Codebusters=====================================================\\

  const cb = new Codebusters();
  const filter = (m) => m.content.startsWith("!cwordp");

  if (message.content === "!wordp") {
    let wordPattern = cb.generateWordPattern(" ");
    let cipher = wordPattern[0];
    let plains = wordPattern[1];
    let encodedCipher = cb.encode(cipher);

    const embed = new MessageEmbed()
      .setColor("#6109B3")
      .setTitle("Word Patterns")
      .setDescription("Identifying word patterns is important when solving aristocrats. Use me to practice them! Toggle across difficulty level using * or **\n")
      .setURL('https://docs.google.com/document/d/1g4zWZL3jKIWx29Ig7M1zsptQFepCnYTiG8DCyW7x9FY/edit')
      .addField(encodedCipher + " " + plains, "\u200b")
      .setTimestamp();
    message.channel.send({ embeds: [embed] });


    message.channel
      .awaitMessages(filter, { max: 3, time: 20000, errors: ["time"] })
      .then((collected) => {
        console.log(collected.size());
      })
      .catch((err) => console.log(err));
  }

});

client.login("OTM0OTQ5NjQ1Nzk1MzYwODM5.GCTW4z.bijG9n0K7EwIw7PyT4XEy0G-aIZEXheMeU9LGk");

