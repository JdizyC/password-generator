//
//const document = new Document(//127.0.0.1:3000/passwordGenerator.html))
const nums = document.getElementById('num');
const syms = document.getElementById('sym');
const lets = document.getElementById('let');
const caps = document.getElementById('cap');
const tots = document.getElementById('tot');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const formInput = document.getElementById("formInput");
const content = document.getElementById("content")


//check if you are on the bvrowser or the server
if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

    let numberLength = nums.value
    let symbolLength = syms.value
    let letterLength = lets.value
    let capsValue = caps.value
    let passwordLength = tots.value

//Sync input and range for elements
const numRange = document.getElementById('numRange');
const numInput = document.getElementById('num');
numRange.addEventListener('input',syncNum);
numInput.addEventListener('input',syncNum);
function syncNum(y) {
    const value = y.target.value
    numRange.value = value
    numInput.value = value
}
const symRange = document.getElementById('symRange');
const symInput = document.getElementById('sym');
symRange.addEventListener('input',syncSym);
symInput.addEventListener('input',syncSym);
function syncSym(y) {
    const value = y.target.value
    symRange.value = value
    symInput.value = value
}
const letRange = document.getElementById('letRange');
const letInput = document.getElementById('let');
letRange.addEventListener('input',syncLet);
letInput.addEventListener('input',syncLet);
function syncLet(y) {
    const value = y.target.value
    letRange.value = value
    letInput.value = value
}
const totRange = document.getElementById('totRange');
const totInput = document.getElementById('tot');
totRange.addEventListener('input',syncTot);
totInput.addEventListener('input',syncTot);
function syncTot(y) {
    const value = y.target.value
    totRange.value = value
    totInput.value = value
}
 
//password generator
function generate(e) {
    //let numberLength = nums.value  //number of numbers to use
    var number = '1234567890';
    var passwordNumber = '';
if (nums.value >= 0 && nums.value <= 10) {
        numberLength = nums.value -1;
    for (var i = 0; i <= numberLength; i++) {
        var randomNum = Math.floor(Math.random() * number.length);
        passwordNumber += number.substring(randomNum, randomNum +1)
        }
};

    //let letterLength = lets.value  //number of letters to use
    var letter = 'asdfghjklqwertyuiopzxcvbnm';
    var capital = 'ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop';
    var passwordLetter = '';
if (lets.value >= 0 && nums.value <= 26) {
        letterLength = lets.value -1;
    if (caps.checked === false) {  //if Include Capital Letters is False
        for (var i = 0; i <= letterLength; i++) {
        var randomLetter = Math.floor(Math.random() * letter.length);
        passwordLetter += letter.substring(randomLetter, randomLetter +1)
        }
    }else {  //if Include Capital Letters is checked
        for (var i = 0; i <= letterLength; i++) {
        var randomCapital = Math.floor(Math.random() * capital.length);
        passwordLetter += capital.substring(randomCapital, randomCapital +1)
        }
    }
};

    //let symbolLength = syms.value  //number of symbols to use
    var symbol = '!@#$%^&*';
    var passwordSymbol = '';
if (syms.value >= 0 && syms.value <= 8) {
        symbolLength = syms.value -1;
    for (var i = 0; i <= symbolLength; i++) {
        var randomSymbol = Math.floor(Math.random() * symbol.length);
        passwordSymbol += symbol.substring(randomSymbol, randomSymbol +1)
    }
};
    //let passwordLength = tots.value; //password length
    var newString = '';
        newString = passwordNumber + passwordLetter + passwordSymbol;
    var newPassword = '';
if (tots.value >= 0 && tots.value <= 64) {
        passwordLength = tots.value -1;
    for (var i = 0; i <= passwordLength; i++) {
        var randomString = Math.floor(Math.random() * newString.length);
        newPassword += newString.substring(randomString, randomString +1)
    }
    document.getElementById('pas').value = newPassword;  
}
};
//  Generate Button
submit.addEventListener("click", generate);

//add reset button functionality
function resetPW(e) {
    document.getElementById("formInput").reset();
}
reset.addEventListener("click", resetPW);