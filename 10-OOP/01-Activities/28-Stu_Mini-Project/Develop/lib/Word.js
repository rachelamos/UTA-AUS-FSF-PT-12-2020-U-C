const Letter = require("./Letter");

class Word {
  constructor(word) {
      this.word = word;
      this.letters = this.word.split("");
      this.letters.forEach(element => new Letter(element));
  }
}

module.exports = Word;
