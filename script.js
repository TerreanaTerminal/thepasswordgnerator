// Assignment code here
function getCharset(lower, upper, num, special) {
    var charset = "";
    if (lower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (upper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) charset += "0123456789";
    if (special) charset += "!@#$%^&*()_+<>?-=[]{}|;':,.?/~`";
    return charset;
   }
   
   // Define the generatePassword function
   function generatePassword() {
    var length = prompt("Enter the length of the password (min 8, max 128):");
   
    if (length < 8 || length > 128) {
       alert("Invalid length. Please enter a length between 8 and 128.");
       return "";
    }
   
    var hasLowercase = confirm("Include lowercase letters?");
    var hasUppercase = confirm("Include uppercase letters?");
    var hasNumbers = confirm("Include numbers?");
    var hasSpecial = confirm("Include special characters?");
   
    var charset = getCharset(hasLowercase, hasUppercase, hasNumbers, hasSpecial);
    if (charset.length === 0) {
       alert("At least one character type should be selected.");
       return "";
    }
   
    var password = "";
    for (var i = 0; i < length; i++) {
       password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
   
    return password;
   }
  
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
  