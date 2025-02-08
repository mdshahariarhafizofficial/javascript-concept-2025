// BMI Calculator and Health Category
var weight = 90;
var height = 5; // height in foot

var heightInMeters = height*0.3048; // convert height foot to metre 
height = heightInMeters;
// console.log(height);

var Bmi_calc = weight/(height)**2;
var BMI = parseFloat(Bmi_calc.toFixed(2));
console.log("BMI = " + BMI);

if( BMI < 18.5 ){
    console.log("you are underweight!");
}
else if( BMI >= 18.5 && BMI <= 24.9 ){
    console.log("you are normal");
}
else if( BMI >= 25 && BMI <= 29.9 ){
    console.log("you are overweight");
}
else{
    console.log("you are obese");
}



