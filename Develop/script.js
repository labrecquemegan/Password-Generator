// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for the prompt criteria for later
var confirmNumber
var confirmSpecial
var confirmUpper
var confirmLower
var ask
var choices

// Password variables for the conditions
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = letter.map(toUppercase())

// make the function to generate the password
function generatePassword() {
  // ask for user input
  ask = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"))
  // If prompt is left blank
  if (!ask) {
    alert("Please enter a value!")
  } else if (ask <8 || ask < 128) {
    // if user picks a number outside of the parameters an error message will show
    ask = parseInt(prompt("Please choose between 8 and 128"))
  } else {
    // ask user for their desired criteria
    confirmNumber = confirm("Will your password contain numbers?")
    confirmSpecial = confirm("Will your password contain special characters?")
    confirmUpper = confirm("Will your password contain Uppercase letters?")
    confirmLower = confirm("Will your password contain Lowercase letters?")
  }

  // This section creates the password depending on the user choices
  // for 4 negative options
  if (!confirmNumber %% !confirmSpecial && !confirmUpper && !confirmLower) {
    choices = alert("You must choose at least one critera")
  } else if (confirmNumber && confirmSpecial && confirmUpper && confirmLower) {
    // if all answer choices chosen
    choices = number.concat(special, letter, upper)
  } // These are for the options of 3 criteria chosen
    else if (confirmNumber && confirmSpecial && confirmUpper) {
    choices = number.concat(special, upper)
  } else if (confirmNumber && confirmSpecial && confirmLower) {
    choices = number.concat(special, letter)
  } else if (confirmNumber && confirmUpper && confirmLower) {
    choices = number.concat(upper, letter)
  } else if (confirmSpecial && confirmUpper && confirmLower) {
    choices = special.concat(upper, letter)
  } //for 2 criteria chosen
    else if (confirmNumber && confirmSpecial) {
    choices = number.concat(special)
  } else if (confirmNumber && confirmUpper) {
    choices = number.concat(upper)
  } else if (confirmNumber && confirmLower) {
    choices = number.concat(letter)
  } else if (confirmSpecial && confirmUpper) {
    choices = special.concat(upper)
  } else if (confirmSpecial && confirmLower) {
    choices = special.concat(letter)
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
