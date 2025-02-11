// Create an array of books containing different book.
const books = ["chemistry", "physics", "javascript book", "Math", "C programming"];
console.log(books);

// Use the includes method to check if the array contains a javascript book.
let result = books.includes("javascript book");
console.log(result);

// Print a message to the console indicating whether the element is present in the array or not.
if(result){
    console.log("javascript book is present");
}else{
    console.log("javascript book is not present");
    
}