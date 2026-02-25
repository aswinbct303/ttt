// create a function to calculate sum of two numberfs

function sum(a, b){
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is : ${sum}`);
    
}

sum(30,79);


// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.

function countvavels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++
        }
    }
    console.log("total number of vawvels in this :", count);
    
}

countvavels("hello bro nice to meet you");


// Qs. Create an arrow function to perform the same task.
const arrowVaveles = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++
        }
    }
    return count;
}

let output1 = arrowVaveles("hello");
console.log("total number of vawvels in this :", output1);


// for each function

let arr = [1,2,3,4,5,67,89,];
arr.forEach(function array(value){
    console.log(value);
    
})

let arr2 = ["kerala", "tamil nadu", "goa", "pune"];
arr2.forEach((value, index, fullarray) => {
    console.log("values :",value.toLocaleUpperCase(), "\nindex :", index, "\nfull array :",fullarray);
    
})


// For a given array of numbers, print the square of each value using the forEach loop.
let arr3 = [1,2,3,4,5,6,7,8,9];
arr3.forEach((val) => {
    let res = val * val;
    console.log(res);
    
})


// array map
let arr5 = [9,8,7,6,5,4,3,2,1];
let newArr = arr5.map((value) => { // can used to copy an array
    return value * 2; 
})

console.log("2 * this array's :",newArr);



// array filter 
let arr4 = [1,2,3,4,5,6,7,8,9,10];
let filterEven = arr4.filter((even) => {
    return even % 2 === 0;
    
});

console.log("even numbers in this array's :",filterEven);


// array reduce 
let arr6 = [1,2,3,4,5,6,7,8,9];
const arrayReduce = arr6.reduce((result, value) => {
    return result + value;
    
})
console.log("sum :",arrayReduce);


// method 2
const arrayReduce1 = arr6.reduce(function(result, value) {
    return result > value ? result : value;
});

console.log("biggest :",arrayReduce1);




// We are given array of marks of students. Filter outof the marks of students that scored 90+.
let marks1 = [90,58,99,89,93,65,55];
const marksFiler = marks1.filter((value) => {
    if(value >= 90){
        return value;
    }
})
console.log("filtered marks :\n",marksFiler);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
const get = prompt("enter the number of array");
let array99 = [];

for(i=1; i<=get ;i++){
    array99[i-1] = i; // i-1 because index will start from 0
}
console.log(array99);

// Use the reduce method to calculate sum of all numbers in the array.
const reduceSum = marks1.reduce((res, curr) => {
    return res + curr;
})
console.log("sum of marks :",reduceSum);

// Use the reduce method to calculate product of all numbers in the array.
const reduceProduct = marks1.reduce((res, curr) => {
    return res * curr;
})
console.log("product of marks :",reduceProduct);


