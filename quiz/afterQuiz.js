function Movie(name, minutes, category, ticketPrice) {
    this.name = name;
    this.minutes = minutes;
    this.category = category;
    this.ticketPrice = ticketPrice;
}

const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie("heart", 85, "drama", 40));
movies.push(new Movie("unholy", 100, "horror", 32));
movies.push(new Movie("blonde", 135, "drama", 25));
movies.push(new Movie("me time", 92, "comedy", 30));
movies.push(new Movie("choose or die", 118, "horror", 36));
movies.push(new Movie("red note", 110, "comedy", 40));

let cheapestPrice = Math.min(...movies.map(Movie => Movie.ticketPrice))
let cheapestMovie = movies.find(Movie => Movie.ticketPrice === cheapestPrice);
console.log(cheapestMovie);

let highestValue = Math.max(...movies.map(Movie => Movie.minutes));
let longestMovie = movies.find(Movie => Movie.minutes === highestValue);
console.log(longestMovie);


const menu = { pasta: 55, pizza: 25, hamburger: 70, salad: 24, steak: 120 };
function getMenu(menu) {
    for (const key in menu) {
        console.log(`${key}:${menu[key]}`);
    }
}
getMenu(menu)

function getAveragePrice(price) {
    let objValues = Object.values(price)
    let findAverage = objValues.reduce((prev, curr) => prev + curr, 0) / objValues.length;
    console.log(findAverage);
}

getAveragePrice(menu);


let email = "dano@gmail.com"

function findMailCompany(string) {
    const countUserDigit = string.lastIndexOf("@")
    const mailComp = string.substring(string.indexOf("@") + 1, string.lastIndexOf('.'));
    console.log("the mail company is " + mailComp);
    console.log("the number of the user letters is " + countUserDigit);
}
findMailCompany(email);

const menu2 = { pasta: 55, pizza: 25, hamburger: 70, salad: 24, steak: 120 };
let sum = 0;
let count = 0;
for (const key in menu) {
    console.log(`${key}:${menu[key]}`);
    sum += menu[key];
    count++
}
console.log(sum / count);

