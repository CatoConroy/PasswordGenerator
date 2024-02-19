// Assignment code here.
let passReq= {
  charCount:0,
  upperCase:false,
  lowerCase:false,
  numberCase:false,
  specialCase:false,
  passwordLength: 0,
  passwordResult: "",

    //array to hold lowercase letters
    arrayLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    //array to hold uppercase letters
    arrayUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

      //array to hold numbers
     arrayNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],

       //array to hold special characters
      arraySpecial: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
      "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"],


  reset: function() {
    this.charCount=0;
    this.upperCase=false;
    this.lowerCase=false;
    this.numberCase=false;
    this.specialCase=false;
  },
// These functions allow the object to log whether or not to use a character type.
  upperC: function() {
    this.upperCase = true;
  },

  lowerC: function() {
    this.lowerCase = true;
  },

  numberC: function(){
    this.numberCase = true;
  },

  specialC: function(){
    this.specialCase = true;
  }

};
// Get references to the #generate element.
let generateBtn = document.querySelector("#generate");

// Character Prompt and Validation. Outside of the generatePassword function for definition purposes. Utilizes RegEx to make sure the input is numerical.
let promptCharF = function (){
  let promptChar = parseInt(window.prompt("Enter how many characters your password will have between 8-128."))
// promptChar= parseInt(window.prompt("Enter how many characters your password will have between 8-128."));
if (promptChar >= 8 && promptChar <= 128) {
  passReq.charCount = promptChar;
}
else if (promptChar <=8 || promptChar >=128) {
  window.alert ("You did not enter a valid value. Please try again.");
  promptCharF();
}


else if (promptChar = /[^1234567890]/) {
  window.alert ("Please provide your response in the form of a numerical character.");
  promptCharF();
}

}
//! Defintion for the generatePassword function. The primary code will exist within this function.

function generatePassword (){
  console.log("Button Clicked.");
  // Sets values to default as to not confuse the program after multiple password runs.
  passReq.reset(); 
  // Prompt for Password Character Count.
  promptCharF();

  console.log("Character Count =", passReq.charCount);

  // Prompt for capitalized letters.
  let promptUpper = window.confirm ("Would you like for your password to contain capitalized characters?");
    if (promptUpper) {
      passReq.upperC();
      
    };
    console.log("Capitalized: ", passReq.upperCase);

  // Prompt for lowercased letters.
  let promptLower = window.confirm ("Would you like for your password to contain lower cased characters?");
    if (promptLower) {
      passReq.lowerC();
    };
    console.log("Lower Case: ", passReq.lowerCase);

    // Prompt for Numbers.
    let promptNumber = window.confirm ("Would you like for your password to contain numerical characters?");
      if (promptNumber) {
        passReq.numberC();
      };
      console.log("Numbers: ", passReq.numberCase);

    // Prompt for Special Characters.
      let promptSpecial = window.confirm ("Would you like for your password to contain special characters?");
        if (promptSpecial) {
          passReq.specialC();
        };
        console.log("Special: ", passReq.specialCase);

        if (promptSpecial === false && promptNumber === false && promptLower === false && promptUpper === false) {
          window.alert ("You must select at least one character type");
          generatePassword();
        }




  
  // Generate password.
while (passReq.passwordLength < passReq.charCount) {
  if (passReq.lowerCase === true && passReq.passwordLength < passReq.charCount) {
    let lowerCas = passReq.arrayLowerCase[Math.floor(Math.random() * 26)]
    passReq.passwordResult = passReq.passwordResult + lowerCas;
    passReq.passwordLength++;
  }

  if (passReq.upperCase === true && passReq.passwordLength < passReq.charCount) {
    let upperCas = passReq.arrayUpperCase[Math.floor(Math.random() * 26)]
    passReq.passwordResult = passReq.passwordResult + upperCas;
    passReq.passwordLength++;
  }

}
  // Write resulting password to passwordText.


  return passReq.passwordResult;
} //! End generatePassword function


// Write password to the #password input.
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
