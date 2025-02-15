// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
let keys = Object.keys(myObject);
// console.log(keys);

for( const prop of  keys){
    let value = myObject[prop];
    console.log("Key: ", prop, "|", "type: ", typeof(value));
    
}