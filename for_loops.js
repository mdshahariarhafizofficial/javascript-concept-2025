let number = [2, 54, 45, 65, 85, 74, 232, 200];

for( let i of number ){
    console.log(i);
    
}
console.log(" ");
let fruits = ["Banana", "Mango", "Apple", "Lemon"];
for( let x of fruits ){
    console.log(x);
}
console.log(" ");
// Even Number

for( let a = 1; a <= 10; a++ ){
    if( a % 2 === 0 ){
        console.log(a, "- is Even Number");
    }
}

// for( let a = 1; a <= 10; a++ ){
//     if( a % 2 !== 1 ){
//         console.log(a, "- is Even Number");
//     }
// }
// for( let a = 2; a <= 10; a+=2 ){
//         console.log(a, "- is Even Number");
// }
console.log(" ");
// Odd Number

for( let n = 1; n <= 10; n++ ){
    if( n % 2 === 1 ){
        console.log(n, "- is Odd Number");
    }
    
}

// for( let n = 1; n <= 10; n++ ){
//     if( n % 2 !== 0 ){
//         console.log(n, "- is Odd Number");
//     }    
// }

// for( let n = 1; n <= 10; n+=2 ){
//     console.log(n, "- is Odd Number");
// }

console.log(" ");

// 1 - 30 divisible by 5
for( let b = 1; b <= 30; b++ ){
    if( b % 5 === 0){
        console.log(b, "- is divisible by 5 ");
    }
    
}

console.log(" ");

// 1 - 30 divisible by 3 and sum
let sum = 0;
for( let c = 1; c <= 30; c++ ){
    if( c % 3 === 0){
        sum = sum+ c;        
        console.log(c, "- is divisible by 3 ");
    }
    
}
console.log("Sum = ", sum);

