// Access element using id
var articlesDiv = document.getElementById("articles");
var mainDiv = document.getElementById("main");

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = "50px";
mainDiv.children[1].style.color = "white";


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    promptTypes();
    promtpCount();
    acceptableCharacters = "";

    if (isUpper) {
        acceptableCharacters += upperLetters;
    }
    if (isLower) {
        acceptableCharacters += lowerLetters;
    }
    if (isSpecial) {
        acceptableCharacters += special;
    }
    if (isNumber) {
        acceptableCharacters += numbers;
    }
    console.log(acceptableCharacters);
    writePassword() 
});

function promptCount() {
    var count = prompt("Please choose the length of your password.");
    if (parseInt(count) < minCount || parseInt(count) > maxCount) {
        alert("Password length must be between " + minCount + " and " + maxCount);
        promptCount();
    } else totalLength = count;
}

function promptTypes() {
    isUpper = confirm("Include uppercase letters?");
    isLower = confirm("Include lowercase letters?");
    isSpecial = confirm("Include special characters?");
    isNumber = confirm("Include numbers?");

    if (!isUpper && !isLower && !isSpecial && !isNumber) {
        alert("You must include at least one type of character.");
        promptTypes();
    }
}

function getRandomCharacterFrom(string) {
    return string[Math.floor(Math.random() * string.length)];
}

function generatePassword() {
    var randomPassword = "";

    for (var i=0; i < totalLength; i++) {
        randomPassword += getRandomCharacterFrom(acceptableCharacters);
    }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("pwd: " + password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}