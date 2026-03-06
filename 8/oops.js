// this keyword
const employeee = {
    name: "aswin",
    mark: 98,
    markPercentage() {
        console.log("makrk :", this.mark); // used to get the values in it

    }
}

// proto type
const student = {
    markPercentage() {
        console.log("bro got 10%");

    }
}

const aswin = {
    Fullname: "aswin sparky",
}

aswin.__proto__ = employeee;



// classes & constructor
class ToyotaCar {
    constructor(brand, milage, color){ // it will always run if we use "new" keyword
        console.log(`brand : ${brand}\nMilage : ${milage}\nColor : ${color}`);
        
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 45, "red"); // parameter passed to constructor
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 56); // if the parameter is not defined it returns "undefined"
lexus.setBrand("lexus");



// inheritence 
class Person {
    constructor(Name) {
        this.name = Name;
    }
    eat(){
        console.log(`${this.name} is eating`);
        
    }

    sleep(){
        console.log(`${this.name} is sleeping`);
        
    }

    code(){
        console.log(`${this.name} is coding`);
        
    }
}

class Work extends Person {
    working(){
        console.log(`${this.name} is working`);
        
    }
}

let aswin  = new Work("Aswin");
console.log(aswin);


// super keyword
class Person {
    constructor(Name) {
        this.name = Name;
    }
    eat(){
        console.log(`${this.name} is eating`);
        
    }
}

class Work extends Person {
    constructor(branch, Name){
        super(Name); // used to pass the name to parent 
        super.eat(); // to get elements from the parent class
        this.branch = branch
    }
    working(){
        console.log(`${this.name} is working`);
        
    }
}

let wrk = new Work("electric", "Aswin");



// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. 
// It also has a method called viewData() that allows user to view website

class User{
    constructor(Name, email){
        this.email = email
        this.name = Name
    }

    viewData(){
        console.log("data viewed");
        
    }
}

class Admin extends User{

    constructor(Name, email){
        super(Name, email);

    }
    editData(){
        console.log("data edited sucessfully");
        
    }
}

let Student1 = new User("Aswin", "Aswin@gmail.com");
let Student2 = new User("Akash", "Akash@gmail.com");

let admin = new Admin("admin", "admin@gmail.com");