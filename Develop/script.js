// Assignment code here

//global variable declaration and object to store user choice

library = [
  {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXY",
  },
  {
    specialCharacter: "!@#$%|&*()-=+~<>,.?/;:{}[]" ,
  }
];
userChoice = {
  maxLength: 8,
  generatePassword: "",
  count: 0,
  passwordBank: "",
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
var randomNumberPassword = function (passwordBank){
  var value = Math.floor(Math.random()* ((passwordBank.lenght)+1));
  return value;
};

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
  } else {
    userChoice.passwordBank = userChoice.passwordBank.concat(library[0].lowerCase);
  }
  return value;
};

var getUpperCase = function(){
  var value = confirm("Would you like include upper case?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  } else {
    userChoice.passwordBank = userChoice.passwordBank.concat(library[1].upperCase);
  }
  return value;
};

var getSpecial = function(){
  var value = confirm("Would you like to include special character?");
  if (value === false){
    userChoice.count = userChoice.count + 1;
  }else{
    userChoice.passwordBank = userChoice.passwordBank.concat(library[2].specialCharacter);
  }
  return value;
};

//update the userChoice object 
var updateUserChoice = function(){
  userChoice.maxLength = parseInt(getLength());
  getLowerCase();
  getUpperCase();
  getSpecial();
};

// generate password with concat()

var generatePassword = function(){
  userChoice.reset();
  updateUserChoice();
  console.log(userChoice.count)
  if (userChoice.count < 3){
    for (var i = 0; i < userChoice.maxLength; i++){
      console.log("it's working");
      console.log(userChoice.passwordBank);
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
