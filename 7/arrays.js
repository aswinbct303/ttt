let arr = ["brother", "hello", "good", "boy", "girl"];
console.log(arr);


console.log(arr[2]);

for (array in arr) {
    console.log(array); // it prints index 

}

for (let array of arr) {
    console.log(array); // it prints values

}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 

}

for (let array in arr) {
    console.log(arr[array]); // it prints index and values now

}



// For a given array with marks of students -> 85, 97, 44, 37, 76, 60
// Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for(let val of marks){
    sum = val+sum;
}

let avg = sum/marks.length;
console.log(avg);



// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];
for(let i = 0; i<prices.length; i++){
    let offer = prices[i] / 10;
    let value = prices[i] - offer
    prices[i] = value
}

console.log(prices);

// push method
let valuesss = [250, 645, 300, 900, 50];
valuesss.push(99,88,77,66,55); // to add values eg: valuesss.push("helloooo", "broooo", "heiii")


for(let i = 0; i<valuesss.length; i++){
    console.log(valuesss[i]);
    
}


// pop method 
let value2 = [250, 645, 300, 900, 50];
value2.pop(50); // to remove ending of an array

for(let i = 0; i<value2.length; i++){
    console.log(value2[i]);
    
}


// concat method
let value5_1 = [1,2,3,4,5];
let value5_2 = [6,7,8,9,0];

let concat = value5_1.concat(value5_2);
console.log(concat);


//unshift method 
let value6 = ["b", "c", "d"];

let unshift = value6.unshift("a");
console.log("index no :", unshift, "\nchanged array :", value6); // will add at the starting


//shift method 
let value7 = ["b", "c", "d"];

let shift = value7.shift();
console.log("index no :", shift, "\nchanged array :", value7); // will remove from the start


// slice method
let value8 = ["brother", "hello", "good", "boy", "girl", "help", "hospital"];

let slice = value8.slice(2,5); // will only showws betwwen the index
console.log(slice);




// splice method (add, remove, replace)
let value9 = [1,2,3,4,5,6,7,8,9];

let splice = value9.splice(2,0,100,101); // startindex, dltcount, newElement
console.log(splice);
console.log(value9);


// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a;
let qa = companies.shift();
console.log(qa);
console.log(companies);

// b;
companies.splice(1,1,"Ola");
console.log(companies);

// c;
companies.push("Amazon");
console.log(companies);

