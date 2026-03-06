// call back
const hello = () => {
    console.log("hello broo");

}

setTimeout(hello, 2000);

// call back => a function passed as an argument on another function 
function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, sumcallback) {
    sumcallback(a, b);
}

calculator(2, 3, sum);



//callback hell 
function getData(dataid, getNextData) {
    //2s
    setTimeout(() => {
        console.log("data", dataid);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
//callback hell 
getData(1, () => {
console.log("getting data2....");
getData(2, () => {
    console.log("getting data3....");
getData(3, () => {
        console.log("getting data4....");
getData(4);
    }) 
})
});



// promise
let promise = new Promise((resolve,reject)=>{
  let success = true;

  if(success) resolve("Done");
  else reject("Error");
});

promise
.then(res=>console.log(res))
.catch(err=>console.log(err));



// Promise Chaining
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

getData(1)
.then(() => {
    return getData(2);
})
.then(() => {
    return getData(3);
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});



// async await
function getdataofall(getdat){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("hello brooo", getdat);
            resolve("status 200");
        }, 2000)
    })
}

async function getddata() {
    await getdataofall(1);
    await getdataofall(2);
    await getdataofall(3);
}

getddata(); // need to call the function


// IFFE (immidiatly invoked function execution)
(async function () {
    await getdataofall(1);
    await getdataofall(2);
    await getdataofall(3);
}) (); // will automatically run without calling



/// Genarator function
function* numbers(){
  yield 1;
  yield 2;
  yield 3;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());




///Destructuring
let user = {name:"Ashwin", age:22};

let {name, age} = user;

console.log(name, age);

//array Destructuring
let arr = [10,20,30];

let [a,b] = arr;

console.log(a, b);