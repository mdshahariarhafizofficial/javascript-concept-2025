const laptop = {
    brand: "Hp",
    model: "h-52",
    ram: "16gb",
    gpu: "1650 Super.",
    gen: "i5"
}
console.log(laptop);

for( const key in laptop ){
    console.log(key, " = ", laptop[key]);
}

let feature = Object.keys(laptop);
// console.log(feature);

for( const featr of feature ){
    console.log(featr, "=", laptop[featr]);
}
