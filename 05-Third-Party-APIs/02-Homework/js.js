const quick = "the quick brown fox jumps over the calm kitten quietly";
const hat = "this hat is the greatest!";
const day = "what a wonderful day it has been!";

function firstUnique () {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
            return char;
        }
    }
    return "_";
};

firstUnique(quick);
firstUnique(hat);
firstUnique(day);