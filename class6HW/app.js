let string = "Hello all i am in haifa";
string = string.split('')
string = string.filter(withoutA)
string = string.join("")
function withoutA(letter) {
    if (letter === 'a') {
        return false
    } else {
        return true
    }
}
console.log(string);

let arrayOfStudents = [
    { fullName: "tzach", id: "15181891", avg: 50 },
    { fullName: "dabush", id: "sdf2r2345", avg: 82 },
    { fullName: "ilan", id: "3453", avg: 39 },
    { fullName: "avram", id: "345345", avg: 61 },
    { fullName: "david", id: "345345", avg: 94 },
];
arrayOfStudents = arrayOfStudents.filter(avgAbove80);
function avgAbove80(number) {
    if (number.avg > 80) {
        return true
    } else {
        return false
    }
}
console.log(arrayOfStudents);

//number 4
let strings = "i am avi and i love tuna";
let counter = 0;
strings = strings.split('')
strings = strings.map(countIndexOfA).filter(removeIndex);
const valueOfAllAIndex = strings.reduce((previousValue, currentValue) => previousValue + currentValue,
    counter)
function removeIndex(string) {
    if (string === '') {
        return false
    } else {
        return true
    }
}

function countIndexOfA(string, index) {
    if ('a'.includes(string)) {
        return index
    } else { return '' }
}
console.log(valueOfAllAIndex);

//number 5
let numbers = [1234, 4, 54, 2, 6]

let count = 0;
numbers = numbers.map(allEIndexOfEvenValue).filter(removeOddNumbers)
const valueOfEvenIndex = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, count)
function removeOddNumbers(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

function allEIndexOfEvenValue(number, index) {
    if (number % 2 === 0) {
        return index
    }
}
console.log(valueOfEvenIndex);

//number 8
let sentence = "Hello my name is Adi"

sentence = sentence.split('')
for (let index = 0; index < sentence.length; index++) {
    if (sentence[index] === " ") {
        sentence[index] = "<br>"
    }

}
sentence = sentence.join("")

let parent = document.getElementById('parent').innerHTML = sentence

