// Count how many times a string has the letter a

let str = "Bangladesh is my country";

let count = 0;
for( let i = 0; i < str.length; i++ ){
    let element = str[i];
    if (element === "a") {
        count = count+1;
    }
}
console.log(count);