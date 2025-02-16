// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let convertStr = str.split("");
    let count = 0;
    for( let i of convertStr ){
        if( i === "0" ){
            count = count+1;
        }
    }
    return count;
}

const result = count_zero("00011110101200");
console.log(result);
