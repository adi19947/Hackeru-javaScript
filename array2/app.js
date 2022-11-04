// indexOf intro

let string = "hello I am tzach";

let result = string.indexOf("t", 3);

//console.log(result);

//question 1
//delete all 'a' from array/string

let string1 = "hello all I am in Haifa";
string1 = string1.split("");
string1 = string1.map(ignoreA);
string1 = string1.join("");
//console.log(string1);

//option 1 if using map
function ignoreA(letter) {
    if (letter == "a") {
        return "";
    } else {
        return letter;
    }
}

//option2 if using filter
function ignoreA2(letter) {
    if (letter == "a") {
        return false;
    } else {
        return true;
    }

    //same solution, more elegant
    //return !(letter == "a")
}

//option3 while and indexOf

let string2 = "hello all I am in Haifa";
string2 = string2.split("");

//let string2=['h','e','l',....]

while (string2.includes("a")) {
    //רוץ כל עוד יש את האות איי במשפט
    let indexOfA = string2.indexOf("a"); //מה האינדקס של האיי הראשון שקיים במשפט
    string2.splice(indexOfA, 1); //חתוך את המערך ממיקומו של איי, צעד אחד
}
string2 = string2.join("");
//console.log(string2);

//slice function

let array2 = [1, 142, 4355, 565, 567, 32];

let result2 = array2.slice(2, 4);

// console.log(result2);
// console.log(array2);

///question2 return middle array

function cutTheCenter(array) {
    let result;
    let indexOfStart;
    if (array.length % 2 == 0) {
        //בודק אם אורך המערך זוגי
        indexOfStart = array.length / 2 - 1; //מחפש את האינדקס (מיקום) של ערך שהייתי רוצה להתחיל ממנו בסלייס
        result = array.slice(indexOfStart, indexOfStart + 2); //חותך סלייס מהמערך מאינדקס ההתחלה שמצאתי, סלייס באורך 2
    } else {
        indexOfStart = array.length / 2 - 1.5;
        result = array.slice(indexOfStart, indexOfStart + 3);
    }
    return result;
}

//console.log(cutTheCenter(array2));

//find function

let array3 = [15, 20, 19, 30, 17];

function findOver18(number) {
    return number > 18;
}

let result3 = array3.findIndex(findOver18);
//console.log(result3);

let arrayOfStudents = [
    { fullName: "tzach", id: "15181891", avg: 50 },
    { fullName: "dabush", id: "sdf2r2345", avg: 82 },
    { fullName: "ilan", id: "3453", avg: 39 },
    { fullName: "avram", id: "345345", avg: 61 },
    { fullName: "david", id: "345345", avg: 94 },
];

//question3 find the avg more then 80

let result4 = arrayOfStudents.filter(findAVGbiggerThen80);

function findAVGbiggerThen80(student) {
    return student.avg > 80;
}

//console.log(result4);

//split function
//works for strings

let string3 = "hello world this is HavkerU";
let allTheWords = string3.split(" ");
console.log(allTheWords);