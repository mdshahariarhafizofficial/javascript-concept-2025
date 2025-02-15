let number = [15, 25, 241, 85, 45, 56];

let rev = [];
for( let i of number ){
    rev.unshift(i);
}
console.log(rev);

let reverse = [];
for( let x = 0; x < number.length; x++ ){
    let element = number[x];
    reverse.unshift(element);
}
console.log(reverse);

let rev_num = [];
for( let i = number.length-1; i >= 0; i-- ){
    let nums = number[i];
    rev_num.push(nums)
}
console.log(rev_num);
