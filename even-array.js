function evenArray(number){
    // console.log(number);
    let evenArray = [];
    for( let i of number ){
        if ( i % 2 === 0 ) {
            evenArray.push(i);
        }
    }
    return evenArray;
}

const arr1 = [58, 27, 14, 33, 21, 19];
let output1 = evenArray(arr1);
console.log("Even Numbers is = ", output1);
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let output2 = evenArray(arr2);
console.log("Even Numbers is = ", output2);


function oddSum(numbers){
    let sum = 0;
    for( let i of numbers ){
        if ( i % 2 !== 0 ) {
            sum = sum+i;
        }
    }
    return sum;
}

const num1 = [2, 6, 8, 10, 20, 5, 7];
const result1 = oddSum(num1);
console.log("Odd Sum = ", result1);

const num2 = [7, 7, 5, 5, 9];
const result2 = oddSum(num2);
console.log("Odd Sum = ", result2);
