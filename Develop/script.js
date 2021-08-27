// Assignment code here

//global variable declaration and object to store user choice
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "!@#$%|&*()-=+~<>,.?/;:{}[]"
var criteriaCounter = 0;
userChoice = {
  maxLength: 8,
  lowerCase: false,
  upperCase: false,
  specialCharacter: false,
  generatePassword: "",
  count: 0,
  reset: function(){
    this.lowerCase= false,
    this.upperCase= false,
    this.specialCharacter= false,
    this.maxLength = 8,
    this.generatePassword = "",
    this.count = 0
  }
};

//randomNumber function to create a random number
var randomNumberPassword = function (){
  var value = Math.floor(Math.random()* (27));
  return value;
};

var randomNumberCriteria = function(){
  var value = Math.floor(Math.random() * 4);
}

// obtain the user choice through a series of prompt
var getLength = function(){
  var value = prompt("How long is your password? Enter a value between 8 and 128");
  while (value <= 8 || value > 128){
    value = prompt("Not an acceptable value. PLease enter a value between 8 and 128");
  }
  return value;
};

var getLowerCase = function(){
  var value = confirm("Would you like include lower case?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  }
  return value;
};

var getUpperCase = function(){
  var value = confirm("Would you like include upper case?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  }
  return value;
};

var getSpecial = function(){
  var value = confirm("Would you like to include special character?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  }
  return value;
};

var updateUserChoice = function(){
  userChoice.maxLength = parseInt(getLength());
  userChoice.lowerCase = getLowerCase();
  userChoice.upperCase = getUpperCase();
  userChoice.specialCharacter = getSpecial();
};

var generatePassword = function(){
  userChoice.reset();
  updateUserChoice();
  console.log(userChoice.count)
  if (userChoice.count < 3){
    for (var i = 0; i < userChoice.maxLength; i++){
      console.log("it's working");
    }
  } else {
    alert("You have to choose at least 1 criteria. Please try again.");
    generatePassword();
  }
  return userChoice.generatePassword;
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
