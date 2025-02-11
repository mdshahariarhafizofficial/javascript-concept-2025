// Create different variables, each containing either an array or a non-array value.
const names = ["Fahad", "Ahmad", "Hafiz"];
let year = 2025;
let numbers = 124563;
let country = "Bangladesh";
// Now use isArray to check if each variable is an array.
let check1 = Array.isArray(names);
let check2 = Array.isArray(country);
let check3 = Array.isArray(numbers);
let check4 = Array.isArray(year);

// Print a message to the console indicating whether each variable is an array or not.
if (check1 == true) {
    console.log("it's Array");
}
else{
    console.log("is not Array");
}

check2 == true? console.log(" it's Array") : console.log("is not Array");
check3 == true? console.log("it's Array") : console.log("is not Array");
check4 == true? console.log("it's Array") : console.log("is not Array");