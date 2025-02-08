// node ./conditional_task/task-6.js

var marks = 90;
var friendMark = 33; 

if (marks >= 80) {
    if ( friendMark >= 80 ) {
        console.log("go for a lunch");
    }
    else if ( friendMark >= 60 && friendMark < 80 ) {
        console.log("good luck next time");
    }
    else if ( friendMark >= 40 && friendMark < 60 ) {
        console.log("message unseen"); 
    }
    else if( friendMark < 40 ){
        console.log("Block");
    }
}
else{
    console.log("sleep and act sad");
}