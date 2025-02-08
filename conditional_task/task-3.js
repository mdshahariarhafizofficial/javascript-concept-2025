//  node ./conditional_task/task-3.js

// Grade Calculator
var marks = 32;

if (marks >= 90 && marks <= 100  ) {
    console.log("A+");
}
else if( marks >= 80 && marks <= 89 ){
    console.log("A");
}
else if( marks >= 70 && marks <= 79 ){
    console.log("B");
}
else if( marks >= 60 && marks <= 69 ){
    console.log("C");
}
else if( marks >= 50 && marks <= 59 ){
    console.log("D");
}
else if( marks >= 33 && marks <= 49 ){
    console.log("E");
}
else{
    console.log("Fail");
}