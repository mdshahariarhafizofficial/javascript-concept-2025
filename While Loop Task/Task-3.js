
// Subtask-1:
// Display sum of all the odd numbers from 81 to 131.
let i = 81;
let sumOdd = 0;
while ( i <= 131 ) {
    if ( i % 2 !== 0 ) {
        sumOdd = sumOdd+i;
    }
    i++;
}
console.log("Sum Off Odd = ", sumOdd);


// Subtask-2:
// Display sum of all the even numbers from 206 to 311.
let x = 206;
let sumEven = 0;
while ( x <= 311 ) {
    if (x % 2 === 0) {
        sumEven = sumEven+x;        
    }
    x++;
}
console.log("Sum Of Even = ", sumEven);