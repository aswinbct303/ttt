const student ={
    Name: "Aswin",
    Age: 22,
    grade: "A",
    cgpa: "8.9",
    isPass: true
}
student.Name = "sparky"
student["Age"] = student["Age"]+1
console.log(student);

//Create a const object called "product" to store information shown in the picture.
const product = {
    Name: "Parker ball pen",
    price: 299,
    rating: 4.5,
    deal: true,
    offer: "5%"
}

console.log(product);


let number = 11;

if(number%2===0){
    console.log("even number");

} else {
    console.log("odd number");

}


let num = prompt("enter the number");

if(num%5===0){
    alert("it is a multipple of 5");

} else {
    alert("it is not a multipple of 5");
}


// Qs2. Write a code which can give grades to students according to their scores:
// • 80-100, A
// • 70-89, B
// • 60-69, C
// • 50-59, D
// • 0-49, F

let score = 110;

if (score >= 80 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score <= 89) {
    console.log("Grade B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade F");
} else {
    console.log("not a grade");

}

let sasi = sasi;
