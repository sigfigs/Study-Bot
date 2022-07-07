const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
   name: "!help",
   description: "Sends a list of commands.",
   execute(message, args) {
      const embed = new MessageEmbed()
         .setColor("WHITE")
         .setTitle("**Commands:**")
         .setDescription("Learn to use Meow!")

         .addField("\u200b", "\u200b")
         .addField("__**Miscellaneous**__", "\u200b")

         .addFields([
            {
               name: "!help",
               value: "Displays list of commands."
            },
            {
               name: "!play [status]",
               value: "Sets bot status."
            },
            {
               name: "!8ball [question]",
               value: "Listen to your fortunes."
            },
         ])

         .addField("\u200b", "\u200b")
         .addField("__**Science Quiz Cat**__", "\u200b")

         .addFields([
            {
               name: "buzz *or* bz",
               value: "Buzzes the buzzer. Admin must reset the buzzer with !b to buzz again."
            },
            {
               name: "!b",
               value: "Resets the buzzer (admins only)."
            },
            {
               name: "!lead",
               value: "Displays the leaderboard."
            },
            {
               name: "!randomsubject *or* !randsub",
               value: "Dispense a random science subject."
            },
            {
               name: "!updatelead [team name] [-/+] [points]",
               value: "Updates the leaderboard (only for admins)."
            },
            {
               name: "!clearlead",
               value: "Clears the leaderboard (only for admins)."
            }
         ])

         .addField("\u200b", "\u200b")
         .addField("__**Codebusters**__", "\u200b")

         .addField("\u200b", "\u200b")
         .addField("__**Fermi Questions**__", "\u200b")

      message.channel.send({ embeds: [embed] });
   }
}