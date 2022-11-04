//number 1
//part A
function Movie(name, minutes, category, ticketPrice) {
    this.name = name;
    this.minutes = minutes;
    this.category = category;
    this.ticketPrice = ticketPrice;
}

// משתנה המכיל מערך ריק,ובכל שורה אחרי זה יוצר אובייקט חדש ומכניס  לתוך המערך הריק שנוצר בהתחלה את אותו האובייקט החדש שנוצר 
const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie("heart", 85, "drama", 40));
movies.push(new Movie("unholy", 100, "horror", 32));
movies.push(new Movie("blonde", 135, "drama", 25));
movies.push(new Movie("me time", 92, "comedy", 30));
movies.push(new Movie("choose or die", 118, "horror", 36));
movies.push(new Movie("red note", 110, "comedy", 40));

console.log(movies);

//part B
let highestValue = Math.max(...movies.map(o => o.minutes))
let longestMovie = movies.find(Movie => Movie.minutes === highestValue);
console.log(longestMovie);


//number 2
//part A
const menu = { pasta: 55, pizza: 25, hamburger: 70, salad: 24, steak: 120 };
for (const key of Object.keys(menu)) {
    console.log(`${key}:${menu[key]}`);
}

//part B
const objValues = Object.values(menu)
const average = objValues.reduce((a, b) => a + b, 0) / objValues.length;
console.log(average);


//number 4

//part A
const btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", function () {
    const w = Math.floor(Math.random() * 256);
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = "rgb(" + x + "," + y + "," + z + "," + w + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
});