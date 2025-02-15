// Check whether a string contains all the vowels a, e, i, o, u

let str =  "Amar SonAr Bangla. Ami tomay valobAsi e i o u";
let strConvert = str.split("");
// console.log(strConvert);


for( let i of strConvert ){
    // console.log(i);
    if ( ( (i == "a") || (i === "A") ) || ( (i == "e") || (i == "E") ) || ( (i == "i") || (i == "I") ) || ( (i == "o") || (i == "O") ) || ( (i == "u") || (i == "U") ) ) {
        console.log(i, "is Vowel");
    }
    else if(i == " "){
        console.log(" ");
    }
    else{
        console.log(i, "is Consonant");
        
    }
}