// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function mathOperation(number){
    if ( number % 2 !== 0 ) {
        let result = number*2;
        return result;
    }
    else{
        let result = number/2;
        return result;
    }
}

const output = mathOperation(99);
console.log(output);
