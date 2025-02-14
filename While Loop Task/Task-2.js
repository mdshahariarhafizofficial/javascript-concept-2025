// Subtask-1:
// Find all the odd numbers from 61 to 100.
console.log("odd numbers");
let i = 61;
while ( i <= 100 ) {
    if( i % 2 !== 0 ){
        console.log(i, "- is odd Number");
        
    }
    i++;
}


// Subtask-2:
// Find all the even numbers from 78 to 98.
console.log("");
console.log("Even numbers");

let x = 78;
while ( x <= 98 ) {
    if ( x % 2 === 0 ) {
        console.log(x, "- is Even Number");
    }
    x++;
}