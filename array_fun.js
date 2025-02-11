let names = [ "Jamal", "Kamal", "Jakir", "Fokir", "Jamila" ];
console.log(names);

// includes Function
let inCld = names.includes("Jakir");
console.log(inCld);

let nonInCld = names.includes("Jamaler ma");
console.log(nonInCld);

// indexOf
console.log(names.length);

console.log(names.indexOf("Kamal"));
console.log(names.indexOf("Jamila"));

// Array is Array
let a = 20;
console.log(Array.isArray(a));

// Join
let age = [10, 20, 30]
console.log(age);


let joint = age.join(" and ");
console.log(joint);

// slice
console.log("Slice");

let date = [1, 2, 3, 4, 5];
console.log(date);

let result = date.slice(1, 3);
console.log(result);

let years = [2001, 2002, 2003, 2004, 2005, 2006];
console.log(years);

let sYears1 = years.slice(3, 6);
console.log(sYears1);

let sYears2 = years.slice(2, 5);
console.log(sYears2);

let friends = ["Rahim", "Korim", "balok", "salok", "jabir", "kobir", "nibir"];
console.log(friends);

let bro = friends.slice(2, 4);
console.log(bro);

let vaiBrother = friends.slice(1, 6);
console.log(vaiBrother);

// Splice
console.log("Splice");


let fruits = ["Mango", "banana", "orange", "Apple", "Lemon"];
console.log(fruits);

let newFruits = fruits.splice(2, 2, "bedana", "kiwi");
console.log(newFruits);
console.log(fruits);








