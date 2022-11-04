//splice

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
letRemoveItems = myArray.splice(3, 2, 10, 11, "hey")
console.log(myArray);
console.log(letRemoveItems);

//map Function
let myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
// // for (let index = 0; index < myArray2.length; index++) {
// //     myArray2[index] = myArray2[index] * 2;

// }

let result = myArray2.map(multiplyBy2);
console.log(result);

//מקבלת מספר ומחזירה את מכפלתו ב-1
function multiplyBy2(number) {
    return number * 2
}
//מקבלת מספר ממערך ומחזירה את מכפלתו עם המספר הבא
function multiplyByNext(number, index, array) {
    if (index == array.length - 1) {
        return number * number;
    }
    else {

        return number * array[index + 1];
    }
}


//filter function

let myArray3 = [1, 2, 3, 4, 5, 6, 7];
let result3 = myArray3.filter(biggerThen3)
function biggerThen3(number) {
    return number > 3;
}
//console.log(result3);


let myArray4 = [10, 20, 30, 40];
console.log(myArray4.indexOf(20));