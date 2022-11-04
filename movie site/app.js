function Movie(name, movieLength, category, price) {
    this.name = name;
    this.movieLength = movieLength;
    this.category = category;
    this.price = price;
    this.html = document.createElement('div');
    this.html.className = "movieDiv"
    this.html.innerText = `name: ${this.name}\nlength: ${this.movieLength}\ncategory: ${this.category}\nprice: ${this.price}`;
    this.deleteBtn = document.createElement('button');
    this.deleteBtn.innerText = "Delete";
    this.deleteBtn.className = "deleteBtn"
    this.id = this.name + this.movieLength;
    this.html.appendChild(this.deleteBtn);
    this.deleteBtn.addEventListener('click', () => {
        movies = movies.filter((movie) => {
            return movie.id !== this.id;
        })
        showMovies(movies);
    })
}




let movies = [];
movies.push(new Movie("luck", 100, "comedy", 32));
movies.push(new Movie("heart", 85, "drama", 40));
movies.push(new Movie("unholy", 100, "horror", 32));
movies.push(new Movie("blonde", 135, "drama", 25));
movies.push(new Movie("me time", 92, "comedy", 30));
movies.push(new Movie("choose or die", 118, "horror", 36));
movies.push(new Movie("red note", 110, "comedy", 40));

function showMovies(movies) {
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = "";
    movies.map((movie) => {
        moviesContainer.appendChild(movie.html);
    });
};

showMovies(movies);

// function searchMovie() {

//     // let filteredByName = movies.filter((movie) => { return movie.name.includes(searchInputValue) })
//     //showMovies(filteredByName)
// }

// let searchInputValue = document.getElementById("searchInput")
// console.log(searchInputValue);

function searchMovie() {
    //get the value from the search bar
    let searchInputValue = document.getElementById("searchInput").value;

    //filter function
    let newMoviesArray = movies.filter((movie) => {
        return movie.name.includes(searchInputValue);
    });
    showMovies(newMoviesArray);
}



let searchInput = document.getElementById('searchInput').addEventListener('input', searchMovie);

let categoryFilter = document.getElementById('categoryFilter');
categoryFilter.addEventListener('change', () => {
    let filteredByCategory = movies.filter((movie) => {
        return movie.category === categoryFilter.value;
    })
    showMovies(filteredByCategory);
})


const filterLengthBtn = document.getElementById('filterLengthBtn');
filterLengthBtn.addEventListener('click', () => {
    let fromLength = document.getElementById('fromLen');
    let toLength = document.getElementById('toLen');
    let filterByLength = movies.filter((movie) => {
        return movie.movieLength >= fromLength.value && movie.movieLength <= toLength.value;
    })
    showMovies(filterByLength)

})


const sortBySelect = document.getElementById('sortBySelect');
sortBySelect.addEventListener('change', () => {
    switch (sortBySelect.value) {
        case "category":
            movies = movies.sort((a, b) => {
                if (a.category > b.category) {
                    return 1
                }
                if (b.category > a.category) {
                    return -1
                }
            })

            break;

        case "length":
            movies = movies.sort((a, b) => {
                return a.movieLength - b.movieLength;
            })

            break;

        case "name":
            movies = movies.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } if (b.name > a.name) {
                    return -1
                }
            })
            break;
        case "price":
            movies = movies.sort((a, b) => {
                return a.price - b.price;
            })

        default:
            break;
    }
    showMovies(movies)
})