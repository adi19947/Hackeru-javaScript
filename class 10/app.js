function area(r) {
    let result = Math.PI * Math.pow(r, 2);
    console.log(result);
}

function circumference(r) {
    let result = 2 * r * Math.PI
    console.log(result);
}


//Date object
//JavaScript counts months from 0 to 11:

//January = 0.

//December = 11
let date = new Date()

const d = new Date(2020, 1, 28)
console.log(d);

//q10
// function findWeekDay(myDate) {
//     let theWeekDay = myDate.getDay();
//     if (theWeekDay === 0) {
//         console.log("sunday");
//     }
//     if (theWeekDay === 1) {
//         console.log("monday");
//     }
//     if (theWeekDay === 2) {
//         console.log("tuesday");
//     }
//     if (theWeekDay === 3) {
//         console.log("wednesday");
//     }
//     if (theWeekDay === 4) {
//         console.log("thursday");
//     }
//     if (theWeekDay === 5) {
//         console.log("friday");
//     }
//     if (theWeekDay === 6) {
//         console.log("saturday");
//     }
// }

// findWeekDay();


function findWeekDay2(myDate) {
    switch (key) {
        case 0:
            console.log("sunday");
            break;
        case 1:
            console.log("monday");
            break;
        case 2:
            console.log("tuesday");
            break;
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;

        default:
            break;
    }
}


function theWeekDay3(myDate) {
    let theWeekDay = myDate.getDay();
    const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
    let day = days[theWeekDay];
    console.log(day);
}

theWeekDay3(date)


function getDay(date) {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const d = new Date(date);
    let day = days[d.getDay()];
    console.log(day);

}

getDay(2022, 10, 23)


//how many days to your birthday
// function daysToBirthDay(myDate) {
//     let birthDay = new Date(myDate);
//     let now = new Date().getTime();
//     let distance = birthDay - now;
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     console.log(days);
// }

// daysToBirthDay("2023-06-13");


function daysToBirthDay(myDate) {
    let now = new Date();
    let dateDiff = myDate - now;
    dateDiff = dateDiff / 86400000
    console.log(dateDiff);
}
let myBD = new Date(2023, 5, 13)
daysToBirthDay(myBD);


//Arrow functions



//standard way
function getHello() {
    return "Hello"
};

//standard with variable

const getHello2 = function () {
    return "Hello2"
};

console.log(getHello2());

//Arrow function
const getHello3 = () => {
    return "Hello3"
}

//arguments
const multiply = (a, b) => {
    return a * b;
};

//if we just return we don't need the word 'return'
const multiply2 = (a, b) => a * b;

//ex with filter
let array = ["aba", "hello", "avram", "pleas", "sababa", "aquarim"];
array = array.filter((word) => word[0] === "a");
console.log(array);

//pilandrome

// let number = 1221
// let array = number.toString().split('')
// array = array.reverse()
// let isPilandrom = (number) => {

//     if (number == array) {
//         return true
//     } else false
//     console.log(number);
// }
// isPilandrom(number)
const isPilandrom = (number) => {
    let arrayOfDigits = number.toString().split('');
    let reverseNumber = arrayOfDigits.reverse().join('');
    return reverseNumber == number
};

console.log(isPilandrom(1221));


const arrayOfNumbers = [121, 12, 43, 4664, 87, 111, 30];
let result = arrayOfNumbers.sort((a, b) => {
    if (isPilandrom(a)) {
        return -1
    }
    if (isPilandrom(b)) {
        return 1
    }
    return 0
})

console.log(result);