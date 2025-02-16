function isEven(number){
    if ( number % 2 === 0 ) {
        return true
    }
    else{
        return false;
    }
}

console.log("is Even = ", isEven(5));
console.log("is Even = ", isEven(100));
console.log("is Even = ", isEven(66));


function isOdd(number){
    if ( number % 2 !== 0) {
        return true
    }
    return false
}

console.log("is Odd = ", isOdd(55));
console.log("is Odd = ", isOdd(2));
console.log("is Odd = ", isOdd(853));
