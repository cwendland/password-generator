// Assignment Code
var generateBtn = document.querySelector("#generate");

var boolSpecial = false;
var boolUpper = false;
var boolNumbers = false;
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "1234567890";
var lowerChars = upperChars.toLowerCase();

// Write password to the #password input
function generatePassword(passLength, inclSpecial, inclUpper, inclNumbers) {
  var availChars = lowerChars;

  if (inclSpecial) {
    availChars = availChars + specialChars;
  }
  if (inclUpper) {
    availChars = availChars + upperChars;
  }
  if (inclNumbers) {
    availChars = availChars + numberChars;
  }

  console.log(availChars);

  var password = [];

  for(var i = 0; i < passLength; i++) {
    password.push(availChars[Math.floor(Math.random()*availChars.length)])
  }
  console.log(password);
  return password.join("");
} 

function obtainInput() {
  var numChars = prompt("How many characters would you like the password to be?");

  if (isNaN(numChars)) {
    alert("Invalid submission. Please enter a number.")
    obtainInput();
  } else if (numChars < 8 || numChars > 128){
    alert("Password length must be between 8 and 128 characters.")
    obtainInput();
  }

  return numChars;
}


function writePassword() {
  if (confirm("Would you like to include special characters?")) {
    boolSpecial = true;
  }
  if (confirm("Would you like to include uppercase characters?")) {
    boolUpper = true;
  }
  if (confirm("Would you like to include number characters?")) {
    boolNumbers = true;
  }

  var numChars = obtainInput();

  var password = generatePassword(numChars, boolSpecial, boolUpper, boolNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
