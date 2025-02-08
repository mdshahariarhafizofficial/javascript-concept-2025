// Ticket fare Calculator

let age =  18;
let student = false;

if ( age < 10 ) {
    console.log("Free");
}
else if( age >= 60 ){
    console.log("15% Discount");
}
else if(student){
    console.log("50% discount");
}
else{
    console.log("Regular ticket fare 800 tk");
}