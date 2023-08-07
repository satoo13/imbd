console.log("Started");

const API_KEY = "api_key=38b8d2bcefa0333cdf8237e6be700817";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/discover/movie/?sort_by=popularity.desc&' + API_KEY;
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

fetch(API_URL)
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        for (i = 0; i < data.results.length; i++) {
            let element =
                `<div id="item${i}" class=" movie">
                    <div class="card-div">
                        <img class="display" src="`+ IMG_BASE_URL + `${data.results[i].poster_path}">
                    </div>
                    <div class="name">${data.results[i].title}</div>
                    <div class="rating">
                        <div class ="avg">❤️ ${data.results[i].vote_average}</div>
                        <div class="poll">${data.results[i].vote_count} votes</div>
                    </div>
                </div>`;

            var container = document.getElementById('menu');
            container.innerHTML += element;
        }

        console.log("Got the movies ")

    })
