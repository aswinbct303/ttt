let str = "hello my. name is aswin"
console.log(str[6]);

// slice to trim values on string
let strslice = "0123456789"
console.log(strslice.slice(2,8)) // start - end

// concatinate
let str1 = "Aswin";
let str2 = "Sparky";
console.log(str1.concat(str2)); // join 
console.log(str2.concat(str1)); 
console.log(str1 + str2); //old method


// replace
let str_replace = "god";
console.log(str_replace.replace("g", "j"));
//2
console.log(str_replace.replace("god", "hello bro how are you"));
// 3
let str_replace2 = "gododododkkkkodod";
console.log(str_replace2.replaceAll("od", "k")); // replace alll


//char at
let char_serch = "BRO"
console.log(char_serch.charAt(1));// WILL GET 1ST INDEX


// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhapra"
// ', username should be "@shradhakhapra13"

let userName = prompt("Enter the Name")
let result = `@${userName}`;

alert("your username is "+result+"\nlength : "+result.length);
console.log(result);