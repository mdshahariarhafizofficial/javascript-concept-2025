// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    for( let i of numbers ){
        sum = sum+i;
    }
    let average = (sum/(numbers.length))
    return average;
}

const output = make_avg([85, 44, 33, 75, 50]);
console.log(output);

