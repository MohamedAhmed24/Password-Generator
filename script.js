// Assignment Code
let generateBtn = document.querySelector("#generate");


let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@#$%^&*()_-=+{}[]\|;:'.,/?><";
let chosenCharacters = "";

//create functions 
function enterpassword() {
  let password = generatepassword;
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function writePassword(){
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)


function generatePassword(){
  let result = "";
  let length = prompt("How many characters would you like in your password? (between 8 and 128)");
  if(isNaN(length)){
    alert("You must enter a number");
    return generatePassword()
  }
  if(length<8 || length> 128){
    alert("Please choose numbers between 8 and 128");
    return generatePassword()
  }
  
  let hasUpperCase = confirm("Would you like to include upper case letters in your password?");
  let hasLowerCase = confirm("would you like to include lower case letters in your password?");
  let hasNumbers = confirm("Would you like to include numbers in your password?");
  let hasSpecial = confirm("Would you like to include special characters in your password?");

  if(!hasUpperCase&&!hasLowerCase&&!hasNumbers&&!hasSpecial){
    alert("You must at least choose one character type");
    return generatePassword()
  }

  if(hasUpperCase){
    chosenCharacters += upperCase
  }
  if(hasLowerCase){
    chosenCharacters += lowerCase
  }

  if(hasNumbers) {
    chosenCharacters += numbers
  }

  if(hasSpecial) {
    chosenCharacters += special
  }

for (var i = 0; i < length; i++) {
  result += chosenCharacters.charAt(Math.floor(Math.random() * chosenCharacters.length));
}
return result;

}