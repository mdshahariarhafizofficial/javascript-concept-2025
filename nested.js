var age = 30;
var student = true;

if( age >= 12 && age < 18 ){
    console.log("Your age is '12 - 18' ");
}
else if( age >= 18){
    console.log("Your age is 18+");

    if ( student ) {
        console.log("You can apply Now!");
    }
    else{
        console.log("you can't apply here....");
        
    }
}
else{
    console.log("not eligible.");
}