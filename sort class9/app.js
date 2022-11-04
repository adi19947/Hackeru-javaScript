//q1
const numbers = [123, 23, 5, 2, 658];
numbers.sort(function (a, b) {
    return a - b;
    //if a bigger then b => return positive => b first
    //if b bigger then a=> return negative => a first
});
//console.log(numbers);

//q2
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

//console.log(fruits);

//q3
const words = ["Super", "hello", "Superman", "hey", "Sushi"];

words.sort(function (a, b) {
    if (a[0] == "S") {
        return -1;
    }
    if (b[0] == "S") {
        return 1;
    }
    return 0;
});

//console.log(words);

//q4

const sWords = ["Sandwitch", "Coffe", "Super", "Class", "Fresh", "Snap"];

sWords.sort(function (a, b) {
    if (a[0] == "S") {
        return -1;
    }
    if (b[0] == "S") {
        return 1;
    }
    if (a.includes("S") || a.includes("s")) {
        return -1;
    }
    if (b.includes("S") || b.includes("s")) {
        return 1;
    }
    return 0;
});

//console.log(sWords);

//q5

function fixPhone(phone) {
    //let newPhone = phone.replace("-","") //one way to removes all the -
    let newPhone = phone.split("-");
    newPhone = newPhone.join(""); //second way to removes all the -
    newPhone = newPhone.slice(newPhone.length - 9, newPhone.length); //take the last 9 digits
    newPhone = "+972" + newPhone; //add +972 in begining
    return newPhone;
}

//q6

function checkPassword(password) {
    let tests = 0;
    //length more then 8 less then 15
    if (password.length >= 8 && password.length <= 15) {
        tests++;
    }
    //another way :
    // if(password.length<8||password>15){
    //     return false;
    // }

    //includes capital and regular english leter
    if (checkIfIcludesCapitalAndRegularLetter(password)) {
        tests++;
    }
    //includes digit
    if (checkIfIncludeDigit(password)) {
        tests++;
    }
    //includes special symbol $,%,@,#
    if (
        password.includes("$") ||
        password.includes("%") ||
        password.includes("@") ||
        password.includes("#")
    ) {
        tests++;
    }

    if (tests == 4) {
        return true;
    }

    return false;
}

function checkIfIcludesCapitalAndRegularLetter(password) {
    let flagCapital = 0;
    let flagRegular = 0;
    for (let index = 0; index < password.length; index++) {
        //check if the character is capital leter
        if (password[index] >= "A" && password[index] <= "Z") {
            flagCapital = 1;
        }
        //check if the character is regular leter
        if (password[index] >= "a" && password[index] <= "z") {
            flagRegular = 1;
        }
    }
    if (flagCapital == 1 && flagRegular == 1) {
        return true;
    }
    return false;
}

function checkIfIncludeDigit(password) {
    let flag = 0;
    for (let index = 0; index < password.length; index++) {
        if (password[index] >= "0" && password[index] <= "9") {
            flag = 1;
        }
    }
    if (flag == 1) {
        return true;
    }
    return false;
}

let myPassword1 = "asdaf12!";

let myPassword2 = "Tgag@@123";

//console.log(checkPassword(myPassword1));
//console.log(checkPassword(myPassword2));

//functions

//void functions
//without return value

//ex:
function sayHello() {
    console.log("hello world");
}

//sayHello();

//functions with returned value
//ex:
function checkIfEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

//arguments
//return
//hoisting
//function can call to another function

//default parameters
function multiply(a, b = 1) {
    return a * b;
}

//console.log(multiply(2));

//console.log(multiply(3, 4));

let array = [1, 2, 3, 4, 5];

array.splice(2);

console.log(array);

//q7 - next class

//q8

function x12(a, b, c) {
    let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    console.log(`x1 is :${x1}`);
    console.log(`x2 is :${x2}`);
}

//x12(1, 2, 1);

let a = 10;
let b = 5;

console.log("a = " + a + " and b = " + b);
console.log(`a = ${a} and b = ${b}`);

//q9
function circleArea(r) {
    let c = Math.PI * Math.pow(r, 2)
    console.log(`${c}`);
}
circleArea(5)


//q10
function getDay(date) {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const d = new Date(date);
    let day = days[d.getDay()];
    console.log(day);
}
getDay(91, 5, 13);

//q11


function countDownBirthDay(date) {
    let birthDay = new Date(date);
    let now = new Date().getTime();
    let distance = birthDay - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    console.log(days);
}

countDownBirthDay("2023-06-13");