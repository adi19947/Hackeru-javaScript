//number 1
let sentence = "hey all I am in Haifa";
sentence = sentence.split('').filter(removeA).join('');
function removeA(string) {
    if (string === "a") {
        return false
    } else {
        return true
    }
}
console.log(sentence);

//number 3
let arrayOfStudents = [
    { fullName: "tzach", id: "15181891", avg: 50 },
    { fullName: "dabush", id: "sdf2r2345", avg: 82 },
    { fullName: "ilan", id: "3453", avg: 39 },
    { fullName: "avram", id: "345345", avg: 61 },
    { fullName: "david", id: "345345", avg: 94 },
];

arrayOfStudents = arrayOfStudents.filter(moreThenAvg80);
function moreThenAvg80(student) {
    if (student.avg > 80) {
        return student;
    }
}

console.log(arrayOfStudents);

//number 4
let string = "Hello my name is adi and im living in kibbutz hamadia";
let counter = 0
string = string.split('').map(countIndexOfA).filter(removeIndex);
let valueOfAllAIndex = string.reduce((previousValue, currentValue) => previousValue + currentValue, counter);

function removeIndex(letter) {
    if (letter === '') {
        return false;
    }
    else { return true }
}

function countIndexOfA(letter, index) {
    if ("a".includes(letter)) {
        return index;
    } else {
        return ''
    }
}

console.log(valueOfAllAIndex);

//number 5
let arrayOfNumbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];
let count = 0;
arrayOfNumbers = arrayOfNumbers.map(findIndexOfEvenNumbers).filter(removeOddIndex)
let valueOfEvenNumberIndex = arrayOfNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, count)
function findIndexOfEvenNumbers(number, index) {
    if (number % 2 === 0) {
        return index
    } else { return "" }
}

function removeOddIndex(number) {
    if (number === '') {
        return false
    } else { return true }
}
console.log(valueOfEvenNumberIndex);

//number 8
let sentence2 = "Hello my name is Adi";
sentence2 = sentence2.split('');
for (let index = 0; index < sentence2.length; index++) {
    if (sentence2[index] === " ") {
        sentence2[index] = "<br>"
    }
}
sentence2 = sentence2.join('')
let parent = document.getElementById('parent').innerHTML = sentence2


//number 9
let sentence3 = "Hello my name is Adi" + "<br>";
let result = sentence3.repeat(2)
let parent2 = document.getElementById('parent2').innerHTML = result;

//number 10
let words = ["apple", "banana", "zebra", "orange", "monkey", "kiwi"];
words.sort();
words.reverse();
console.log(words);

//number 11
let arrayOfStrings = ["Shalom", "Hello", "move", "Shon", "feel", "saloon", "Sharon"];
arrayOfStrings = arrayOfStrings.sort(function (a, b) {
    return b.indexOf("S") - a.indexOf("S");
})
console.log(arrayOfStrings);

//number 12
let arrayOfStrings2 = ["salami", "Salmon", "tuna", "cow", "horse", "sandal", "Shana tova"];
arrayOfStrings2 = arrayOfStrings2.sort(function (a, b) {
    return b.indexOf("S") - a.indexOf("S");
})
console.log(arrayOfStrings2);
//להמשיך לנסות לפתור


//number 13
let arrayOfNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter1 = 0;
for (let index = 0; index < arrayOfNumbers2.length; index++) {
    if (arrayOfNumbers2[index] % 2 === 0) {
        counter1++;
    }

}
console.log(counter1);

//part 2

//number1
let myArray = [12, 2354, 4, 123, 21, 78, 6789];
let result3 = myArray.map(sumOfDigit);
function sumOfDigit(number) {
    let sum = 0;
    let tempNum = number
    while (tempNum > 0) {
        sum += tempNum % 10
        tempNum = Math.floor(tempNum / 10)
    }
    return sum
}
console.log(result3);

//number 2
let arrayOfNumbers3 = [132, 345, 346, 4, 35, 456456, 4532, 4, 4235, 44];
let result4 = arrayOfNumbers3.map(getNumberOfDigits);
function getNumberOfDigits(number) {
    let toString = number.toString()
    return toString.length;
}
console.log(result4);



//number 3
let phoneNumbers = [9721234567890, 345]
phoneNumbers = phoneNumbers.map(insertNumbers);
function insertNumbers(number) {
    let toString2 = number.toString()
    "+972" + number
    return toString2

}
console.log(phoneNumbers);

