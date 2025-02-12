for( let i = 0; i <= 5; i++){
    console.log(i);
}

let number = [2, 5, 8, 88, 45, 20, 445];

for( let x = 0; x < number.length; x++ ){
    // console.log(x);
    let element = number[x];
    console.log(x, "-", element);
}

let sum = 0;
for( let y = 0; y <= 10; y++ ){
    sum = sum+y;
}
console.log("The Summation is = ", sum);

let mul = 1;
for( let z = 10; z > 0; z-- ){
    mul = mul*z;
    console.log(mul);
}
