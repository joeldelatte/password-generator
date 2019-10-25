// variable that selects the Generate Password Button
var generateButton = document.querySelector('#genPword');
// variable that selects the textarea that will have the new password out put
var textPassword = document.querySelector('#textPword');
// An array of special characters for the function below to choose from
var specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", "<", ">", "?", ",", ".", "/"]; 
// numeric characters in a string then .split into an array
var numChar = "1 2 3 4 5 6 7 8 9 0";
var numChar = numChar.split(" ");
// lower case characters in a string then .split into an array
var lowChar = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowChar = lowChar.split(" ");
// upper case characters in string then .split into array
var upChar = "A B C D E F G H I J K L M N O P Q U R S T U V W X Y Z";
var upchar = upChar.split(" ");
// array of all the different character type variables
var charactersAll = [specialChar, numChar, lowChar, upChar];
// variables that includes the prompts for the user to choose length and character types
var promptLength = prompt("Choose a number of characters between 8 and 128.");
var promptSpecial = confirm("Would you like to add any special characters?");
var promptNumber = confirm("Would you like to add numeric characters?");
var promptLower = confirm("Would you like to add lower case characters?");
var promptUpper = confirm("Would you like to add upper case characters?");


// adding onClick to generate button creating function to combine user choices at random and add to textarea using textContent; possibly conditional
generateButton.addEventListener("click", function() {
    if (promptLength > 8 && promptLength < 128 && promptSpecial === true || promptNumber === true || promptLower === true || promptUpper === true) {
        
        
        // var password = numChar[Math.floor(Math.random() * promptLength)] 
        // console.log(password);
    }
});



generateButton




