document.addEventListener("DOMContentLoaded", () => {

    const apiKey = "21f6486f";
    const apiKey2 = "GtzgML8Z2oW4DB5VjvGg6UcfRGY4VXAW";
    
    
    {/* <form id="movie-form">
    <input placeholder="Enter Movie title here"/>
    <input type="submit" value="Search"/>
    </form>
    
    <div id="movie-container"> */}

// Actors: "NickMcuso, Phillip Jarrett, Carri-ne Moss, John Vernon"
// Awards: "1 win."
// Country: Cada"
// Director: "N/A"
// Genre: "Action, Drama,Ftasy, Thriller"
//Lguage: "English"
// Metascore: "N/A"
// Plot: "Steven Matrix is one of the underworld's foremost hitmen until his luck runs out d someone puts a contract out on him. Shot in the forehead by a .22 pistol, Matrix \"dies\ d finds ..."
// Poster: "https://m.media-amazon.com/images/M/MV5BYzUzOTA5ZTMtMTdlZS00MmQ5LWFmNjEtMjE5MTczN2RjNjE3XkEyXkFqcGdeQXVyNTc2ODIyMzY@._V1_SX300.jpg"
// Rated: "N/A"
// Ratings: [{…}]
// Released: "01 Mar 1993"
// Response: "True"
// Runtime: "60 min"
// Title: "Matrix"
// Type: "series"
// Writer: "Grenville Case"
// Year: "1993"
// imdbID: "tt0106062"
// imdbRating: "7.9"
// imdbVotes: "139"
// totalSeasons: "N/A"
    
    document.querySelector("#movie-form").addEventListener("submit",(event) => {
        
        event.preventDefault();
    
        const movie = document.querySelector("#movie-input").value;
    

        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
            .then(res => {
                return res.json();
            }).then((data) => {
                console.log("****movie", data);

                const template = `
                    <div style= "margin-left: 10px;">
                        <h2 class="card text-white bg-secondary mb-3" > Title : ${data.Title} </h2>
                        <div class="card border-primary mb-3">
                            <img src="${data.Poster}"/> 
                            <div class="movie-text-container">
                                <p class="text-info"> Actors : ${data.Actors} </p>
                                <p class="text-info"> Country : ${data.Country} </p>
                                <p class="text-info"> Genre : ${data.Genre} </p>
                                <p class="text-info"> Type : ${data.Type} </p>
                                <p class="text-info"> Runtime : ${data.Runtime} </p>
                                <p class="text-info"> Rating : ${data.imdbRating} </p>
                                <p class="text-info"> Plot : ${data.Plot} </p>
                            </div>
                        </div>
                   </div> 
                `;

                document.querySelector("#movie-container").innerHTML = template;
            });

        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movie}&api-key=${apiKey2}`)
        .then(res => {
            return res.json();
        }).then((data) => {
            console.log("****news", data);

            let template = "";
            
            data.results.forEach((news) => {
                template += `
                    <div style= "margin-left: 10px;">
                        <h2 class="card text-white bg-secondary mb-3" > Title : ${news.headline}</h2>
                        <div class="card border-primary mb-3">
                            <img src="${news.multimedia ? news.multimedia.src : `https://via.placeholder.com/150`}" alt="img"/> 
                            <div class="news-text-container">
                                <p>By: ${news.byline}</b>
                                <p>Publication Date: ${news.publication_date}</p>
                                <p>${news.summary_short}</p>
                            </div>
                        </div>
                    </div> 
                `;
            });

            document.querySelector("#news-container").innerHTML = template;
        });
    });
})

