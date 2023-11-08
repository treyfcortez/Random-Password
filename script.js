// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ['@', '$', '*', '!', '%', '&', '#', '?', '>', '.', '=', '+', '(', '-', ')', '<', '/', '\\', ';', '[', ']', ':', '{', '}', '|', '"', "'", '_'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


// Create a prompt function to ask for options
function passwordOptions() {
  let length = parseInt(prompt('How many characters in your password. Stay between 8 and 128.'));
  //conditional statement to check if password length is a number 
  //conditional statement to check if password length is at least 8 characters long. 
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters")
    return null;
  }

  let lowerCaseConfirm = confirm("Yes I want lowercase");
  let upperCaseConfirm = confirm("Yes I want uppercase");
  let specialCharactersConfirm = confirm("Yes I want special characters");
  let numbersConfirm = confirm("Yes I want numbers");

//conditional to check if user doesn't want any types of characters
  if (lowerCaseConfirm === false && upperCaseConfirm === false && specialCharactersConfirm === false && numbersConfirm === false) {
    alert("You must choose at least one character")
    //put in alert message telling the user at least one character
    return null;
  }
  //object store to user input for length and other characters options
  let passwordCriteria = {

    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    specialCharactersConfirm: specialCharactersConfirm,
    numbersConfirm: numbersConfirm,
    length: length,
  }
  console.log(length)

  return passwordCriteria;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomNum(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomEl = arr[randomIndex]
  return randomEl
}
// Generate the password
function generatePassword() {
  let options = passwordOptions()
  console.log(options)
  let allCharacters = []
  let passwordValue = []
  
  if (options.lowerCaseConfirm) {
    allCharacters = allCharacters.concat(lowerCase)
  }
  if (options.upperCaseConfirm) {
    allCharacters = allCharacters.concat(upperCase)
  }
  if (options.specialCharactersConfirm) {
    allCharacters = allCharacters.concat(specialCharacters)
  }
  if (options.numbersConfirm) {
    allCharacters = allCharacters.concat(numbers)
  }
console.log(allCharacters)
  for (var i = 0; i < options.length; i++) {
    passwordValue.push(randomNum(allCharacters))
  }
  console.log(passwordValue)
  return passwordValue.join("")
}