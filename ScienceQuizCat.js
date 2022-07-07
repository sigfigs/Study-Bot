const Discord = require("discord.js");
const { Client, Intents, MessageCollector } = require("discord.js");
const { MessageEmbed } = require("discord.js");

class ScienceQuizCat {
  constructor(key1, key2, admins, participants, participantScores) {
    this.key1 = key1;
    this.key2 = key2;
    this.admins = admins;
    this.participants = participants;
    this.participantScores = participantScores;
  }

  update(team, sign, scoreChange) {
    if (this.participants.includes(team) == false) {
      this.participants.push(team);
      this.participantScores.push(0);
    }

    else {
      if (sign == "-") {
        this.participantScores[this.participants.indexOf(team)] -=
          parseInt(scoreChange);
      } else {
        this.participantScores[this.participants.indexOf(team)] +=
          parseInt(scoreChange);
      }
    }
  }

  randomSubject() {
    let subjects = [
      "Math",
      "Physics",
      "Biology",
      "Chemistry",
      "Earth Science and Astronomy",
      "Computer Science",
    ];
    let rand = Math.floor(Math.random() * subjects.length);
    return subjects[rand];
  }

  formatLeaderboard() {
    //bubble sort scores
    for (let i = 0; i < participants.length; i++) {
      for (let j = 0; j < participants.length - 1; j++) {
        if (participantScores[j] < participantScores[j + 1]) {
          let tempParticipant = participants[j];
          participants[j] = participants[j + 1];
          participants[j + 1] = tempParticipant;

          let tempScore = participantScores[j];
          participantScores[j] = participantScores[j + 1];
          participantScores[j + 1] = tempScore;
        }
      }
    }
    let leaderboard =
      "```" +
      "Science Quiz Bowl Teams                            Score\n" +
      "--------------------------------------------------------\n";
    for (let i = 0; i < participants.length; i++) {
      let place = "" + (i + 1) + ". ";
      leaderboard = leaderboard + place + participants[i];
      leaderboard =
        leaderboard +
        " ".repeat(
          56 -
          participants[i].length -
          participantScores[i].toString().length -
          place.length
        ) +
        participantScores[i] +
        "\n";
    }
    return (leaderboard += "```");
  }
}

module.exports = ScienceQuizCat;
