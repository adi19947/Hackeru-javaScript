let array = [1, 2, 34, 5, 6, 78, 90, 65];
// let result = array.map(findIndex);
// function findIndex(number, index) {
//     if (number > 10) {
//         console.log(index);
//     }
// }

//console.log(result);
// let tempArray=array;
// while (tempArray.findIndex(findMoreThen10) != -1){

// }

//     function findMoreThen10(number, index) {
//         return
//         console.log(result);

let result = array.filter(indexBiggerThen10)
function indexBiggerThen10(number) {
    return number > 10
}

for (let index = 0; index < result.length; index++) {
    let resultIndex = array.indexOf(result[index]);
    console.log(resultIndex);

}


const array3 = ["G", "f", "H", "k", "P"]
let result2 = array3.filter(keepCapitalLetter);
function keepCapitalLetter(letter) {
    return letter
}

//number 4
const array4 = [12, 45, 63, 45, 38, 45, 34];
array.map(
    function (number) {
        if (number.toString().includes("3")) {
            console.log("yes");
        }
    }
)

//number 5
const array6 = [234, 64, 635, 344, 356];
let counter = 0;
for (let index = 0; index < array6.length; index++) {
    let toString = array6[index].toString()
    for (let j = 0; j < toString.length; j++) {
        if (toString[j] === '3') {
            counter++
        }

    }

}
console.log(counter);

function HowMany3InTheNumber(counter, number) {

    let tempNum = number;
    while (tempNum > 0) {
        if (tempNum % 10 === 3) {
            counter++;
        }
        tempNum = Math.floor(tempNum / 10);
    }
    return counter;
}


let result5 = array6.reduce(HowMany3InTheNumber, 0)

console.log(result5);
// let count3InArray = 0;
// for (let index = 0; index < array6.length; index++) {
//     count3InArray = count3InArray + HowMany3InTheNumber(array6[index]);

// }
// console.log(count3InArray);

//ספור כמה מספרים זוגיים יש במערך של מספרים
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
function HowManyEvenNumbers(counter, number, index, array) {
    if (number % 2) {
        counter++
    }
    return counter;
}
let result7 = arrayOfNumbers.reduce(HowManyEvenNumbers, 0)
console.log(result7);


let numbers = [12, 456, 789, 897, 54, 34];
let result8 = numbers.map(sumOfDigit)
function sumOfDigit(number) {
    let sum = 0;
    let tempNum = number;
    while (tempNum > 0) {
        sum += tempNum % 10;
        tempNum = Math.floor(tempNum / 10)
    }
    return sum;
}



console.log(result8);