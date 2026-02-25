// for loop
let count = 1;
for (count; count <= 30; count++) {
    console.log("hello");

}

// while loop
let i = 1;
while (i <= 5) {
    console.log("printing", i);
    i++
}

// do while loop
let j = 1;
do {
    console.log("good boy");
    j++
} while (j <= 10); // it will run atlest 1 time

// for of loop
let char = "aswin";
let size = 0;
for (let i of char) {
    console.log(i);
    size++
}
console.log("size =",size);


// for in loop
const student = {
    Name: "Aswin",
    Age: 22,
    grade: "A",
    cgpa: "8.9",
    isPass: true
}

for(i in student){
    console.log(i); // returns key names
    console.log(student[i]); // returns values of the key
}


// print all the even numbers
let num = 1;
let limit = 100;

for(num; num<=limit; num++){
    if(num%2===0){
        console.log(num);
    }
}

//Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gamenum = 7;
let usernum = prompt("guss the number");

while(gamenum != usernum){
    usernum = prompt("wrong number guss again");
}
alert("You enterd correect number");