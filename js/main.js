const searchInput = document.getElementById('search-input');
const filterInput = document.getElementById('filter-input');
const movieList = document.getElementById('movie-list');
const addForm = document.getElementById('add-form');

function renderMovies(movies) {
    movieList.innerHTML = '';
    if (movies.length === 0) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No se encontraron películas con los criterios seleccionados.';
        movieList.appendChild(errorMessage);
    } else {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie-card';
            movieElement.innerHTML = `
                <div class="movie-image">
                    <img src="${movie.image}" alt="${movie.title}">
                </div>
                <div class="movie-details">
                    <h2>${movie.title}</h2>
                    <p>Año de lanzamiento: ${movie.year}</p>
                    <p>"${movie.description}"</p>
                </div>
            `;
            movieList.appendChild(movieElement);
        });
    }

 // Actualizar la URL y el historial
 const searchTerm = searchInput.value;
 const filterYear = filterInput.value;
 const urlParams = `?search=${searchTerm}&year=${filterYear}`;
 updateUrl(urlParams);
}

function updateUrl(urlParams) {
 const newUrl = `${window.location.pathname}${urlParams}`;
 window.history.pushState({}, '', newUrl);
}

function handleUrlChanges() {
 const urlParams = new URLSearchParams(window.location.search);
 const searchTerm = urlParams.get('search') || '';
 const filterYear = urlParams.get('year') || '';

 // Actualizar los valores de los campos de entrada según la URL
 searchInput.value = searchTerm;
 filterInput.value = filterYear;

 // Aplicar los filtros y renderizar películas
 const searchedMovies = searchMovies(searchTerm);
 const filteredMovies = filterMoviesByYear(filterYear);
 const combinedMovies = searchedMovies.filter(movie => filteredMovies.includes(movie));
 renderMovies(combinedMovies);
}

// Manejar cambios en la URL al cargar la página
window.addEventListener('popstate', handleUrlChanges);
function searchMovies(searchTerm) {
    return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

function filterMoviesByYear(year) {
    return movies.filter(movie => movie.year === year);
}

function addMovie(title, description, year, image) {
    const newMovie = {
        title,
        description,
        year,
        image
    };
    movies.push(newMovie);
    return newMovie;
}

searchInput.addEventListener('input', e => {
    const searchTerm = e.target.value;
    const searchedMovies = searchMovies(searchTerm);
    renderMovies(searchedMovies);
});

filterInput.addEventListener('input', e => {
    const filterYear = parseInt(e.target.value);
    const filteredMovies = filterMoviesByYear(filterYear);
    renderMovies(filteredMovies);
});

// Funciones para controlar el modal
function openModal() {
            document.getElementById('add-modal').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('add-modal').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }

        // Función para agregar película y cerrar el modal
    function addMovieAndClose() {
        const title = document.getElementById('title-input').value;
        const description = document.getElementById('description-input').value;
        const year = parseInt(document.getElementById('year-input').value);
        const image = document.getElementById('image-input').value;

        const newMovie = addMovie(title, description, year, image);
        renderMovies(movies);
        closeModal();
    }
// Mostrar las películas iniciales
renderMovies(movies);