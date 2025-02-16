function sumOfArray( numbers ){
    // console.log(number);
    let sum = 0;
    for( let i of numbers ){
        sum = sum+i;
    }
    return sum
}

const arr = [2, 5, 10, 5, 10]
const result = sumOfArray(arr);
console.log("Sum off Array = ", result);

// Reverse String
function revStr(str) {
    let conStr = str.split("");
    let reverse = [];
    // console.log(conStr);
    for( let i of conStr ){
        reverse = i+reverse;
    }
    return reverse;
}
const output1 = revStr("Hlw World");
console.log("Output = ", output1);

const output2 = revStr("Fahad Ahmad");
console.log("Output = ", output2);

const output3 = revStr("Mokhles mia");
console.log("Output = ", output3);
