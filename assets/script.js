// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var finalPassword = "";
  var allowedCharacters = [];

  var passwordLength = prompt(
    "How many characters would you like in your password? Please choose at least 8 characters and no more than 128 characters"
  );

  if (isNaN(parseInt(passwordLength))) {
    alert("You did not enter a number. you failed.");
    return "try again";
  }

  //   var useLowercase = confirm("Please include Lowercase");
  //   if (useLowercase)
  //     allowedCharacters = [...allowedCharacters, ...lowerCasedCharacters];
  //   //   console.log(allowedCharacters);

  //   var useUppercase = confirm("Please include Uppercase");
  //   if (useUppercase)
  //     allowedCharacters = [...allowedCharacters, ...upperCasedCharacters];
  //   //   console.log(allowedCharacters);

  //   var useNumbers = confirm("Please include Numbers");
  //   if (useNumbers)
  //     allowedCharacters = [...allowedCharacters, ...numericCharacters];
  //   //   console.log(allowedCharacters);

  //   var useSpecialCharacters = confirm("Please include Special Characters");
  //   if (useSpecialCharacters)
  //     allowedCharacters = [...allowedCharacters, ...specialCharacters];

  //   console.log(allowedCharacters);

  for (var i = 0; i < passwordLength; i++) {
    console.log(i);
  }

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
