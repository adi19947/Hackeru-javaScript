//constructor for movie
function Movie(name, length, category, price) {
    this.name = name;
    this.length = length;
    this.category = category;
    this.price = price;
    this.html = document.createElement("div");
    this.html.innerText = `Name: ${this.name}\nLength: ${this.length}\nCategory: ${this.category}\nPrice: ${this.price}$`;
    this.html.className = "movieDiv";
}
//create array of movies with data
const movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie("heart", 85, "drama", 40));
movies.push(new Movie("unholy", 100, "horror", 32));
movies.push(new Movie("blonde", 135, "drama", 25));
movies.push(new Movie("me time", 92, "comedy", 30));
movies.push(new Movie("choose or die", 118, "horror", 36));
movies.push(new Movie("red note", 110, "comedy", 40));

//create div with + sign
let addBlock = document.createElement("div");
addBlock.className = "movieDiv";
addBlock.style.fontSize = "32px";
addBlock.innerText = "+";

//show the movies in the page
function showMovies(movies) {
    const moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.innerHTML = "";
    movies.map((movie) => {
        moviesContainer.appendChild(movie.html);
    });
    moviesContainer.appendChild(addBlock);
}
//function that creates newArray that includes the text from the text input
function searchMovie() {
    //get the value from the search bar
    let searchInputValue = document.getElementById("searchInput").value;
    //filter function
    let newMoviesArray = movies.filter((movie) => {
        return movie.name.includes(searchInputValue);
    });
    showMovies(newMoviesArray);
}

//initial state
showMovies(movies);

//execute the function when text change/entered
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", searchMovie);
//show the result in console

//on click the + div => show the form
const formContainer = document.getElementById("formContainer");

addBlock.addEventListener("click", () => {
    formContainer.style = "display:block;";
});

//find the btn in the form
const formBtn = document.getElementById("formBtn");
//when click => find all the inpunts values
formBtn.addEventListener("click", () => {
    let newMovieName = document.getElementById("movieName").value;
    let newMovieLength = document.getElementById("movieLength").value;
    let newMovieCategory = document.getElementById("category").value;
    let newMoviePrice = document.getElementById("moviePrice").value;
    //create new Movie
    let myNewMovie = new Movie(
        newMovieName,
        newMovieLength,
        newMovieCategory,
        newMoviePrice
    );
    movies.push(myNewMovie);
    showMovies(movies);
});