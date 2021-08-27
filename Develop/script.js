// Assignment code here

//global variable declaration and object to store user choice
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var minLength = 8; //8 because it's the bare minumun
userChoice = {

};

//randomNumber function to create a random number betweeb 0 and 25 (0 index) -- math.random * (25-0+1)
var randomNumberAlphabet = function (){
  var value = Math.floor(Math.random()* (26));
  return value;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
