/* let numbers = [5, 7, 90, , 678, 56566, 786, 443, 335, 6778, 9]
let max = 0;

function highestNumber() {
    for (let index = 0; index < numbers.length; index++) {
        if (max < numbers[index]) {
            max = numbers[index];
        }
    }
    console.log(max);
}

highestNumber(); */


const array = [1, 5, 7, 8, 9, 0, 4];
let max = array[0];
function findMax(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index]
        }
    }
    return max;
}

let x = findMax(array);
console.log(x);