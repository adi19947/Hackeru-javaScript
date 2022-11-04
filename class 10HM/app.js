//q1

let arrayOfPhones = ["+972526788987", " +972 - 52 - 6256276", "0527878907", "052 - 8976635"];
let fixedPhone = [];

function fixPhone(number) {
    for (let index = 0; index < number.length; index++) {
        let newPhone = number[index].split('')
        for (let j = 0; j < newPhone.length; j++) {
            if (newPhone[j].includes("-")) {
                newPhone[j] = ""
            }
            if (newPhone[j].includes(" ")) {
                newPhone[j] = ""
            }
        }
        newPhone = newPhone.join('');
        newPhone = newPhone.slice(newPhone.length - 9, newPhone.length)
        newPhone = "+972" + newPhone;
        fixedPhone.push(newPhone)
    }
    console.log(fixedPhone);
}

fixPhone(arrayOfPhones);

//q2
function Movie(name, lengthMinutes, category, price) {

    this.name = name;

    this.lengthMinutes = lengthMinutes;

    this.category = category;

    this.price = price;

}

const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie("heart", 85, "drama", 40));
movies.push(new Movie("unholy", 100, "horror", 32));
movies.push(new Movie("blonde", 135, "drama", 25));
movies.push(new Movie("me time", 92, "comedy", 30));
movies.push(new Movie("choose or die", 118, "horror", 36));
movies.push(new Movie("red note", 110, "comedy", 40));

const findCategory = movies.filter(movie => movie.category === "comedy")
console.log(findCategory);

//q3

const array = ["hello", "Please", "thanks", "Home", "Great"];
function upperCaseFirstLetters(letter) {
    for (let i = 0; i < letter.length; i++) {
        letter[i] = letter[i].charAt(0).toUpperCase() + letter[i].slice(1);
    }
    console.log(letter);
}
upperCaseFirstLetters(array);


//q4
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayOfNumbers = arrayOfNumbers.sort(function (a, b) { return b - a });
console.log(arrayOfNumbers);


//class 11


// let arrayOfPhones2 = ["+972526788987", " +972 - 52 - 6256276", "0527878907", "052 - 8976635"];


// function fixPhone(phone) {
//     //let newPhone = phone.replace("-","") //one way to removes all the -
//     let newPhone = phone.split("-");
//     newPhone = newPhone.join(""); //second way to removes all the -
//     newPhone = newPhone.slice(newPhone.length - 9, newPhone.length); //take the last 9 digits
//     newPhone = "+972" + newPhone; //add +972 in begining
//     return newPhone;
// }

// let newArray = arrayOfPhones2.map(fixPhone);
// console.log(newArray);

//q2
let chosenCategory = "comedy"
let newMovies = movies.filter((movie) => {
    return movie.category === chosenCategory
})

console.log(newMovies);

//q3
let newArray = array.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
});
console.log(newArray);

//q4
const array4 = [23, 56, 21, 32, 78, 2, 823, 6];
let newArray4 = array4.sort((a, b) => {
    return b - a;
})
console.log(newArray4);