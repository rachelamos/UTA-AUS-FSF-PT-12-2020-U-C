class Letter {
  constructor(character) {
    this.char = character;
    if (/[a-z1-9]/gi.test(this.character)) {
        this.visible = false;
    }   else {
        this.visible = true;
    }
  }
  toString() {
      if (this.visible) {
          return "_";
      }
  }
  guess(input) {
      if (input === this.char) {
          return true;
      } else {
          return false;
      }
  }
  getSolution() {
      return this.char;
  }
}

module.exports = Letter;

// if then statement where the characters that are not digits or letters are visible
// wherever there are letters, return a _
//