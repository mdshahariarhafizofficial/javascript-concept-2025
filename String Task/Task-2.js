let str = "Amar SonAr Bangla. Ami tomay valobAsi";
let count = 0;

for( let i = 0; i < str.length; i++ ){
    let later = str[i];
    if ( later === "a" || later === "A" ) {
        count+=1;
    }
}
console.log(count);
