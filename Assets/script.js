// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
let password = "";
const possibleCharacter = []
const upperCase= "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z".split(",")
  const passwordLength = parseInt(prompt("How long would you like the password to be?"))

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password Length need to be between 8 and 128")
  }

  const passwordUppercase = confirm("would you like the password to include letters in he alphabet?")

  if (passwordUppercase) {
    password+=getRandomCharacter(upperCase)
    possibleCharacter.push(...upperCase)
  }

  const possibleNumeric = []
  const numeric= "0,1,2,3,4,5,6,7,8,9".split (",")
  
  const passwordNumeric = confirm("would you like the password to include at least one number?")

  if (passwordNumeric) {
    password+=getRandomCharacter (numeric)
    possibleNumeric.push(...numeric)
   }
   
  const possibleSpecialCharacter = []
  const specialCharacter="!@#$%^&*()_+~`|}{[]:;?><,./-=".split(",")

  const passwordspecialcharacter = confirm("would you like the password to include at least one number?")

  if (passwordspecialcharacter) {
    password+=getRandomCharacter (specialCharacter)
    possibleSpecialCharacter.push(specialCharacter)
   }

  while (password.length <passwordLength){
    password+=getRandomCharacter(possibleCharacter)
  }
return password
}

function getRandomCharacter (arr){
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
