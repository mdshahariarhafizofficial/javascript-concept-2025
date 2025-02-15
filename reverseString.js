console.log("-----------Before------------");
let country = "United State Of America";
console.log(country);

console.log("-----------After------------");

let container = "";
for( let i of country ){
    container = i+container;
}
console.log(container);



console.log("-----------Before------------");

let Name = "Shahariar Hafiz";
console.log(Name);

let reverse = "";

for( let x = 0; x < Name.length; x++ ){
    let later = Name[x];
    reverse = later+reverse;     
}

console.log("-----------After------------");
console.log(reverse);


// Shortcut 
console.log("---------Shortcut Way----------");

let president = "Donald Trak";
let rev = president.split("").reverse().join("");
console.log(rev);
