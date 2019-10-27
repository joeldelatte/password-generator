// variable that selects the Generate Password Button
var generateButton = document.querySelector('#genPword');
// variable that selects the copy button
var copyThat = document.querySelector('#copyPword');
// variable that selects the textarea that will have the new password out put
var textPassword = document.querySelector('#textPword');
// An array of special characters for the function below to choose from
var charactersAll = [];
// variables that includes the prompts for the user to choose length and character types

function run() {
    var promptLength = prompt("Choose a number of characters between 8 and 128.");
    var promptSpecial = confirm("Would you like to add any special characters?");
    var promptNumber = confirm("Would you like to add numeric characters?");
    var promptLower = confirm("Would you like to add lower case characters?");
    var promptUpper = confirm("Would you like to add upper case characters?");
    // adds each character type if they are chosen and doesn't if they arent
    if (promptSpecial === true) {
        charactersAll.push("!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~;");
    };
    if (promptNumber === true) {
        charactersAll.push("1234567890");
    };
    if (promptLower === true) {
        charactersAll.push("abcdefghijklmnopqrstuvwxyz");
    };
    if (promptUpper === true) {
        charactersAll.push("ABCDEFGHIJKLMNOPQURSTUVWXYZ");
    };
    // joins the different character types into one large string to be looped through at random
    charactersAll = charactersAll.join('');

    // console.log(charactersAll);

    // adding onClick to generate button creating function to combine user choices at random and add to textarea using textContent; possibly conditional
    function generatePassword() {
        if (promptLength > 8 && promptLength < 128 && promptSpecial === true || promptNumber === true || promptLower === true || promptUpper === true) {
            
            function makepword(length) {
                var password = '';
                let characters = charactersAll;
                let charactersLength = charactersAll.length;
                for (var i = 0; i < length; i++) {
                    password += characters[Math.floor(Math.random() * charactersLength)];
                };
                return password;
            }; 
            textPassword.textContent = makepword(promptLength);
            // console.log(makepword(promptLength));
        };
        
    };

    generatePassword();
};







