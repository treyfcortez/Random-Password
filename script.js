// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var specialCharacters = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", "\\", ";", "[", "]", ":", "{", "}", "|", "“", "’", "_"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Create a prompt function to ask for options
function passwordOptions() {
  let length = parseInt(prompt('How many characters in your password. Stay between 8 and 128.'));
  //conditional statement to check if password length is a number 
  //conditional statement to check if password length is at least 8 characters long. 
  if(isNaN(length) || length < 8 || length > 128){
    alert("Must be between 8 and 128 characters")
      //put a message here letting user know that password needs to be a number using alert('put message here')
    return null;
  }
    
  
    let lowerCaseConfirm = confirm("Yes I want lowercase");
    let upperCaseConfirm = confirm("Yes I want uppercase");
    let specialCharactersConfirm = confirm("Yes I want special characters");
    let numbersConfirm = confirm("Yes I want numbers");
  
  //conditional to check if user doesn't want any types of characters

  if(lowerCaseConfirm === false && upperCaseConfirm === false && specialCharactersConfirm === false && numbersConfirm === false){
    alert("You must choose at least one character")
    //put in alert message telling the user at least 8 characters
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
    return passwordCriteria;
  }


//function to generate random element in array
// function generatePassword() {

//   let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//   let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   let specialCharacters = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", "\\", ";", "[", "]", ":", "{", "}", "|", "“", "’", "_"];
//   let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
//   return generatePassword
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordOptions);


// Generate the password
function generatePassword() {
let password = "";

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialCharacters = ["@", "$", "*", "!", "%", "&", "#", "?", ">", ".", "=", "+", "(", "-", ")", "<", "/", "\\", ";", "[", "]", ":", "{", "}", "|", "“", "’", "_"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let result = lowerCase.concat(" ", upperCase, " ", specialCharacters, " ", numbers);

// var randomCharacter = randomCharacterSet[Math.floor(Math.random() * randomCharacterSet.length)];
  // for(var i = 0; i < passwordLength; i++) {
function generatePassword() {
  let password = "";
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  
  while(length > password.length){
    password += result[Math.floor(Math.random() * result.length)];
  }
  passwordBox.value = password;
   password += lowerCase;
   password += upperCase;
   password += specialCharacters;
   password += numbers;

  }


   return password;
}
