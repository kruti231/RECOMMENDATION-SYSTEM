const movieData = {
    "The Shawshank Redemption": ["Drama"],
    "The Godfather": ["Crime", "Drama"],
    "The Dark Knight": ["Action", "Crime", "Drama"],
    "Pulp Fiction": ["Crime", "Drama"],
    "Forrest Gump": ["Drama", "Romance"],
    "The Matrix": ["Action", "Sci-Fi"],
    "Inception": ["Action", "Sci-Fi"],
    "Fight Club": ["Drama", "Action"]
};

function getRecommendations() {
    const inputMovie = document.getElementById("favorite-movie").value;
    const recommendationsList = document.getElementById("recommendations-list");
    recommendationsList.innerHTML = ""; // Clear previous recommendations


    const genres = movieData[inputMovie];

    if (genres) {
        
        const recommendations = Object.keys(movieData).filter(movie => {
            return movie !== inputMovie && movieData[movie].some(genre => genres.includes(genre));
        });

        
        if (recommendations.length > 0) {
            recommendations.forEach(movie => {
                const li = document.createElement("li");
                li.textContent = movie;
                recommendationsList.appendChild(li);
            });
        } else {
            recommendationsList.innerHTML = "<li>No recommendations found.</li>";
        }
    } else {
        recommendationsList.innerHTML = "<li>Movie not found. Please try another.</li>";
    }
}