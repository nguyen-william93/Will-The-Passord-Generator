// Assignment code here

//global variable declaration and object to store user choice
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacter = "~!@#$%^&*()-=+;:,./<>?[]|`";
var numeric = "0123456789";

userChoice = {
  maxLength: 8,
  generatePassword: "",
  count: 0,
  passwordBank: "",
  reset: function(){
    this.maxLength = 8,
    this.generatePassword = "",
    this.count = 0,
    this.passwordBank = ""
  }
};

//randomNumber function to create a random number base on the length of the password bank
//no need for the random formular because of 0 indexing, so the range is from 0 to length of passwordBank - 1 = math.floor(math.random() * length of passwordBank)
var randomNumberPassword = function (length){
  var value = Math.floor(Math.random()* length);
  return value;
};

// function to prompt the user choice of criteria and update the passwordBank, counter
// userChoice.count is used to check wheter or not the user specified at least one type of password
var getLength = function(){
  var value = prompt("How long is your password? Enter a value between 8 and 128");

  while (value < 8 || value > 128 || isNaN(parseInt(value)) === true){
    value = prompt("Not an acceptable value. PLease enter a value between 8 and 128");
    isNaN(parseInt(value));
  }
  return value;
};

var getLowerCase = function(){
  var value = confirm("Would you like include lower case?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  } else {
    userChoice.passwordBank = userChoice.passwordBank.concat(lowerCase);
  }
};

var getUpperCase = function(){
  var value = confirm("Would you like include upper case?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  } else {
    userChoice.passwordBank = userChoice.passwordBank.concat(upperCase);
  }
};

var getSpecial = function(){
  var value = confirm("Would you like to include special character?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  }else{
    userChoice.passwordBank = userChoice.passwordBank.concat(specialCharacter);
  }
};

var getNumeric = function(){
  var value = confirm("Would you like to include numeric number?")
  if (value === false){
    userChoice.count = userChoice.count + 1;
  } else {
    userChoice.passwordBank = userChoice.passwordBank.concat(numeric)
  }
}

//update the userChoice object 
var getUserChoice = function(){
  userChoice.maxLength = getLength();
  getLowerCase();
  getUpperCase();
  getSpecial();
  getNumeric();
};

// generate password with concat()
var generatePassword = function(){
  userChoice.reset();
  getUserChoice();

  if (userChoice.count < 4){ //checking to see if user specified at least 1 type of password
    for (var i = 0; i < userChoice.maxLength; i++){
      var index = randomNumberPassword(userChoice.passwordBank.length);
      userChoice.generatePassword = userChoice.generatePassword.concat(userChoice.passwordBank[index]);
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
