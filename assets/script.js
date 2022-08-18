// Assignment Code
var generateBtn = document.querySelector("#generate");


//Booleans to see if the possible password components should be included depending on user choice
var boolSpecial = false;
var boolUpper = false;
var boolNumbers = false;

//Strings of the possible password components depending on user choice
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChars = "1234567890";
var lowerChars = upperChars.toLowerCase();

// Write password to the #password input
function generatePassword(passLength, inclSpecial, inclUpper, inclNumbers) {
  var availChars = lowerChars;

  //Conditional statements to determine if optional password components need to be added to the password component string
  if (inclSpecial) {
    availChars = availChars + specialChars;
  }
  if (inclUpper) {
    availChars = availChars + upperChars;
  }
  if (inclNumbers) {
    availChars = availChars + numberChars;
  }

  var password = []; //Creates password array, needs to be array so push works.

  for(var i = 0; i < passLength; i++) { //For loop for the password length
    password.push(availChars[Math.floor(Math.random()*availChars.length)]) //Randomly choose an element of the availChars string to be added to the password
  }
  return password.join(""); //Join the array into a string so the return is a string
} 

function obtainInput() { //Function to get the password length and make sure input is a number and is between 8 and 128 inclusive
  var numChars = prompt("How many characters would you like the password to be?"); //Get the desired password length from the user

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
  if (confirm("Would you like to include special characters?")) {  //Prompts user choice to determine if they would like special characters, uppercase characters, and numbers to be added to the password
    boolSpecial = true;
  }
  if (confirm("Would you like to include uppercase characters?")) {
    boolUpper = true;
  }
  if (confirm("Would you like to include number characters?")) {
    boolNumbers = true;
  }

  var numChars = obtainInput();  //Calls the function to obtain user input on password length

  var password = generatePassword(numChars, boolSpecial, boolUpper, boolNumbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
