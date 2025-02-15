const student = {
    name: "Jamela",
    roll: 56,
    age: 12,
    season: 1965,
}
// console.log(student);
student.name = "Jamaler Ma"
student['age'] = 18;
console.log(student);


let year = student.season;
let rool = student['roll'];
console.log(rool);


const book = {
    bookName: "Math",
    color: "Green",
    page: 150,
    chapter: 15,
    exam: {
        Date: "31 Feb (:",
        time: "12.00 am",
        endTime: "3.00 am",
    }
}

let bColor = book.color;
console.log(bColor);
let chp = book['chapter'] = 5;
console.log(book);


// console.log(book);
