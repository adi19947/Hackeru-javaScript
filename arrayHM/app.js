
//number 1
let array = [1, 5, 7, 8, 9, 35, 78, 23, 789, 86];

let result = array.map(indexBiggerThen10).filter(removeIndex);
function removeIndex(number) {
    if (number === '') {
        return false;
    } else {
        return true;
    }
}
function indexBiggerThen10(number, index) {
    if (number > 10) {
        return index
    } else {
        return ''
    }

}
console.log(result);

//number 2 
let string = ["salmon", "under", "sony", "Sagi", "monkey"];
let allSNames = string.filter(getSString)
function getSString(string) {

    return string.startsWith('s') || string.startsWith('S');
}
console.log(allSNames);



//number 3 
let arrayOfStrings = ["Dan", "lion", "Ron", "TV", "snake", "Fish"];

let capitalLetters = arrayOfStrings.filter(getOnlyCapitalLetters)
function getOnlyCapitalLetters(word) {
    const letters = word.split('')
    for (let index = 0; index < letters.length; index++) {
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(letters[index])) {
            return true;
        } else {
            return false
        }

    }
}
console.log(capitalLetters);



//number 4

let myArray = [234, 567, 78, 345, 676, 345];
let contain3 = myArray.filter(get3Numbers);
function get3Numbers(number) {
    const string = number.toString()
    if (string.includes(3)) {
        console.log("contain 3");
    }
}

//number 5
const arrayOfNumbers = [234, 678, 435, 789, 532, 788];
let counter = 0;

for (let i = 0; i < arrayOfNumbers.length; i++) {
    let toString = arrayOfNumbers[i].toString()
    for (let j = 0; j < toString.length; j++) {
        if (toString[j] === '3') {
            counter++
        }

    }

}
console.log(counter);

