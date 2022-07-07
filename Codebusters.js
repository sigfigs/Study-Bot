class Codebusters {

   constructor() {
      var fs = require("fs");
      this.data = fs.readFileSync("./Codebusters Files/WordPatterns.txt", "utf8");
      this.wordPatterns = this.data.split("\n");

      this.map = new Map();
      for (let i = 0; i < this.wordPatterns.length; i++) {
         this.map.set(this.wordPatterns[i].split(" - ")[0], this.wordPatterns[i].split(" - ")[1]);
      }

      this.easyMap = new Map();
      for (let i = 0; i < 28; i++) {
         this.easyMap.set(this.wordPatterns[i].split(" - ")[0], this.wordPatterns[i].split(" - ")[1]);
      }

      this.hardMap = new Map();
      for (let i = 28; i < this.wordPatterns.length; i++) {
         this.hardMap.set(this.wordPatterns[i].split(" - ")[0], this.wordPatterns[i].split(" - ")[1]);
      }
   }

   generateWordPattern(level) {
      if (level.toLowerCase() === "easy") {
         const keys = Array.from(this.easyMap.keys());
         let randKey = keys[Math.floor(Math.random() * keys.length)];
         return [randKey, this.easyMap.get(randKey)];
      }
      else if (level === "hard") {
         const keys = Array.from(this.hardMap.keys());
         let randKey = keys[Math.floor(Math.random() * keys.length)];
         return [randKey, this.hardMap.get(randKey)];
      }
      else {
         const keys = Array.from(this.map.keys());
         let randKey = keys[Math.floor(Math.random() * keys.length)];
         return [randKey, this.map.get(randKey)];
      }
   }

   encode(cipher) {
      //store unique letters into array
      //generate another array same length with random alphabet letters
      //cipher.replaceAll()

      let original = cipher;
      let unique = [];
      for (let i = 0; i < cipher.length; i++) {
         let letter = cipher.substr(i, 1);
         if (!unique.includes(letter)) {
            unique.push(letter);
         }
      }

      let randLetter = [];
      let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
         "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      let len = unique.length;

      while (len > 0) {
         let randL = alphabet[Math.floor(Math.random() * 26)];
         if (randLetter.includes(randL)) {
            while (randLetter.includes(randL)) {
               randL = alphabet[Math.floor(Math.random() * 26)];
            }
         }

         randLetter.push(randL);
         len--;
      }

      for (let i = 0; i < randLetter.length; i++) {
         cipher = cipher.replaceAll(unique[i], randLetter[i]);
      }
      return original + " " + cipher.toUpperCase();
   }
}

module.exports = Codebusters;


