//number 1
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
let letRemoveItems = myArray.splice(0, 6)
console.log(myArray);

//number 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const power = numbers.map(multiplyArrayNumbers);
function multiplyArrayNumbers(num) {
    return num * num;
}
console.log(power);

//number 3
const arr = [1, 2, 3, 4, 5, 6];
const reverseArray = arr.map((a, i, arr, val = arr[arr.length - 1 - i]) => val);
console.log(reverseArray);

function reverseToArray(number, index, array) {
    let endOfArray = array.length - 1;
    return array[endOfArray - index];
}

let array3 = [0, 1, 2, 3, 4, 5];
array3 = array3.map(reverseToArray);

//number 4
const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(0, 3, "x", "y")
console.log(array);

//number 5
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = arrayOfNumbers.filter(getEvenNumbers);
function getEvenNumbers(number) {
    return number % 2 == 0;
}
console.log(evenNumbers);


//number 6
const myArray2 = [542, 152, 2, 15, 33, 1588, 111]
const onlyThreeDigit = myArray2.filter(function (number) {
    return number.toString().length === 3
})

console.log(onlyThreeDigit);




//number 7

const arrayOfStrings = ["hello", "yes", "age", "no", "be", "bread"];
const onlyABLetters = arrayOfStrings.filter(getABLetters)

function getABLetters(string) {
    return string.includes('a') || string.includes('b');
}


console.log(onlyABLetters);



