let search = document.getElementById("search");
console.log(search);

let doSearch = document.getElementById("click-search-button");
console.log(doSearch);

let displaySearchResult = document.getElementById("display-search-result");

async function getData(url) {
  const result = await fetch(url);

  const parsedResult = await result.json();
  console.log("ln13", parsedResult);
  return { data: parsedResult };
}

search.onkeyup = async function searchData() {
  console.log("inside");
  let Searchdisplay = document.getElementById("display-search-result");
  if (Searchdisplay.innerHTML !== null) {
    console.log("yes");
    Searchdisplay.innerHTML = "";
  }
  let url =
    "https://api.themoviedb.org/3/search/multi?api_key=24661393e867b3b4a85f3f759a76a9d5&query=" +
    `"${search.value}"&language=en-US&page=1`;
  const result2 = await getData(url);
  console.log("ln27", result2);
  console.log("ln34", result2.data.results);
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card cardsearch";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${
            result2.data.results[i].vote_average
          } <i class="fa-solid fa-star green" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${
          result2.data.results[i].original_title ||
          result2.data.results[i].original_name
        } </p>
        <div class="bookmark" onclick="func(this,${
          result2.data.results[i].id
        })"> </div>
      </div>
    </div>`;
      Searchdisplay.appendChild(div);
    }
  }
};

doSearch.onclick = async function searchData() {
  console.log("inside");
  let Searchdisplay = document.getElementById("display-search-result");
  if (Searchdisplay.innerHTML !== null) {
    console.log("yes");
    Searchdisplay.innerHTML = "";
  }
  let url =
    "https://api.themoviedb.org/3/search/multi?api_key=24661393e867b3b4a85f3f759a76a9d5&query=" +
    `"${search.value}'`;
  const result2 = await getData(url);
  console.log("ln34", result2.data.results);
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card cardsearch";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${
            result2.data.results[i].vote_average
          }<i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${
          result2.data.results[i].original_title ||
          result2.data.results[i].original_name
        } </p>
        <div class="bookmark" onclick="func(this,${
          result2.data.results[i].id
        })"> </div>
      </div>
    </div>`;
      Searchdisplay.appendChild(div);
    }
  }
};

// for header movies section display on hover

const Id = document.getElementById("header-left-movies-id");

Id.onmouseover = () => {
  const Id2 = document.getElementById("movies-section-display");
  Id2.style.display = "flex";
  Id2.onmouseout = () => {
    Id2.style.display = "none";
  };
  Id.onmouseout = () => {
    Id2.style.display = "none";
  };
};

// Id.addEventListener("click", (e) => {
//   // // window.location = "anotherpage.html";
//   console.log(e.target);
// });

// popular redirection

let popular = document.getElementById("popular");
popular.onclick = () => {
  window.location = "moviesPopular.html";
};

//Now playing redirection

let nowPlaying = document.getElementById("now-playing");
nowPlaying.onclick = () => {
  window.location = "nowplaying.html";
};
// get upcoming redirection

let getUpcoming = document.getElementById("upcoming");
getUpcoming.onclick = () => {
  window.location = "getUpcoming.html";
};

// topRated redirection

let topRated = document.getElementById("top-rated");
topRated.onclick = () => {
  window.location = "topRated.html";
};

// for tv section hover display effect

const tvId = document.getElementById("header-left-tv-shows-id");

tvId.onmouseover = () => {
  const Id2 = document.getElementById("tv-section-display");
  Id2.style.display = "flex";
  Id2.onmouseout = () => {
    Id2.style.display = "none";
  };
  tvId.onmouseout = () => {
    Id2.style.display = "none";
  };
};
// for people section display effect
const peopleId = document.getElementById("header-left-people-shows-id");

peopleId.onmouseover = () => {
  const Id2 = document.getElementById("people-section-display");
  Id2.style.display = "flex";
  Id2.onmouseout = () => {
    Id2.style.display = "none";
  };
  peopleId.onmouseout = () => {
    Id2.style.display = "none";
  };
};

//for more section display effect

// const moreId = document.getElementById("header-left-more-shows-id");

// moreId.onmouseover = () => {
//   const Id2 = document.getElementById("more-section-display");
//   Id2.style.display = "flex";
//   Id2.onmouseout = () => {
//     Id2.style.display = "none";
//   };
//   moreId.onmouseout = () => {
//     Id2.style.display = "none";
//   };
// };

// tv popular redirection Popular

// let tvSectionDispaly = document.getElementById("tv-section-display");
// tvSectionDispaly.addEventListener("click", (e) => {
//   if (e.target.innerText === "Airing Today") {
//     window.location = "airingToday.html";
//   }
//   if (e.target.innerText === "On Tv") {
//     window.location = "popularTv.html";
//   }
//   if (e.target.innerText === "Top Rated") {
//     window.location = "topRatedTv.html";
//   }
//   if (e.target.innerText === "Popular") {
//     window.location = "popularTv.html";
//   }
// });

let popularTv = document.getElementById("popular-tv");

popularTv.onclick = () => {
  window.location = "popularTv.html";
};

// airing today redirection
let airingToday = document.getElementById("airing-today");

airingToday.onclick = () => {
  window.location = "airingToday.html";
};

// on tv redirection

let onTv = document.getElementById("on-tv");

onTv.onclick = () => {
  window.location = "onTv.html";
};

// top-rated tv   redirection

let topRatedTv = document.getElementById("top-rated-tv");

topRatedTv.onclick = () => {
  window.location = "topRatedTv.html";
};

// popular people redirection

let popularPeople = document.getElementById("popular-people");

popularPeople.onclick = () => {
  window.location = "popularPeopleTv.html";
};

// what' popular section

async function streamingLoadData() {
  let url =
    "https://api.themoviedb.org/3/discover/tv?api_key=24661393e867b3b4a85f3f759a76a9d5&append_to_response=watch/providers";
  const result2 = await getData(url);
  console.log(result2.data.results);
  let streamingDisplay = document.getElementById("streaming-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_name} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      streamingDisplay.appendChild(div);
    }
  }
}

streamingLoadData();

// on tv section

async function onTvLoadData() {
  let url =
    "https://api.themoviedb.org/3/tv/on_the_air?api_key=24661393e867b3b4a85f3f759a76a9d5&append_to_response=watch/providers";
  const result2 = await getData(url);
  console.log(result2.data.results);
  let onTvDisplayDisplay = document.getElementById("on-tv-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_name} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      onTvDisplayDisplay.appendChild(div);
    }
  }
}

onTvLoadData();

// for rent

async function forRentLoadData() {
  let url =
    "https://api.themoviedb.org/3/movie/popular?api_key=24661393e867b3b4a85f3f759a76a9d5&append_to_response=watch/providers";
  const result2 = await getData(url);
  console.log(result2.data.results);
  let forRentDisplay = document.getElementById("for-rent-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_title} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      forRentDisplay.appendChild(div);
    }
  }
}

forRentLoadData();

// in theatre

async function forTheatreLoadData() {
  let url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=24661393e867b3b4a85f3f759a76a9d5&append_to_response=watch/providers";
  const result2 = await getData(url);
  console.log(result2.data.results);
  let forTheatreDisplay = document.getElementById("for-theatre-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_title} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      forTheatreDisplay.appendChild(div);
    }
  }
}

forTheatreLoadData();

// onclick display of popular section

function displayOnclick() {
  let streamingDisplay = document.getElementById("streaming-display");
  let onTvDisplayDisplay = document.getElementById("on-tv-display");
  let forRentDisplay = document.getElementById("for-rent-display");
  let forTheatreDisplay = document.getElementById("for-theatre-display");

  let streaming = document.getElementById(
    "main-whats-popular-section-streaming"
  );

  let ontv = document.getElementById("main-whats-popular-section-on-tv");
  let rent = document.getElementById("main-whats-popular-section-for-rent");
  let theater = document.getElementById(
    "main-whats-popular-section-in-theaters"
  );

  streaming.addEventListener("click", () => {
    onTvDisplayDisplay.style.display = "none";
    forRentDisplay.style.display = "none";
    forTheatreDisplay.style.display = "none";
    streamingDisplay.style.display = "flex";
    streaming.style.backgroundColor = "#0d253f";
    streaming.style.color = "#01b4e4";
    ontv.style.backgroundColor = "white";
    ontv.style.color = "black";
    rent.style.backgroundColor = "white";
    rent.style.color = "black";
    theater.style.backgroundColor = "white";
    theater.style.color = "black";
  });
  ontv.addEventListener("click", () => {
    streamingDisplay.style.display = "none";
    forRentDisplay.style.display = "none";
    forTheatreDisplay.style.display = "none";
    onTvDisplayDisplay.style.display = "flex";
    ontv.style.backgroundColor = "#0d253f";
    ontv.style.color = "#01b4e4";
    rent.style.backgroundColor = "white";
    rent.style.color = "black";
    theater.style.backgroundColor = "white";
    theater.style.color = "black";
    streaming.style.backgroundColor = "white";
    streaming.style.color = "black";
  });
  rent.addEventListener("click", () => {
    streamingDisplay.style.display = "none";
    forRentDisplay.style.display = "flex";
    forTheatreDisplay.style.display = "none";
    onTvDisplayDisplay.style.display = "none";
    rent.style.backgroundColor = "#0d253f";
    rent.style.color = "#01b4e4";
    ontv.style.backgroundColor = "white";
    ontv.style.color = "black";
    theater.style.backgroundColor = "white";
    theater.style.color = "black";
    streaming.style.backgroundColor = "white";
    streaming.style.color = "black";
  });
  theater.addEventListener("click", () => {
    streamingDisplay.style.display = "none";
    forRentDisplay.style.display = "none";
    forTheatreDisplay.style.display = "flex";
    onTvDisplayDisplay.style.display = "none";
    theater.style.backgroundColor = "#0d253f";
    theater.style.color = "#01b4e4";
    streaming.style.backgroundColor = "white";
    streaming.style.color = "black";
    ontv.style.backgroundColor = "white";
    ontv.style.color = "black";
    rent.style.backgroundColor = "white";
    rent.style.color = "black";
  });
}
displayOnclick();

// onclick display of free to watch
// for tv
async function forTvLoadData() {
  let url =
    "https://api.themoviedb.org/3/tv/top_rated?api_key=24661393e867b3b4a85f3f759a76a9d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
  const result2 = await getData(url);
  console.log("346", result2.data.results);
  let tvDisplay = document.getElementById("tv-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_name} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      tvDisplay.appendChild(div);
    }
  }
}

forTvLoadData();
// for movies
async function forMoviesLoadData() {
  let url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=24661393e867b3b4a85f3f759a76a9d5";
  const result2 = await getData(url);
  console.log("346", result2.data.results);
  let moviesDisplay = document.getElementById("movies-display");
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].backdrop_path) {
      //   console.log(result2.data.results[i].backdrop_path);
      let finalUrl = baseUrl + result2.data.results[i].backdrop_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
      <div class="rating-container">
          <span> ${result2.data.results[i].vote_average} <i class="fa-solid fa-star" ></i></span>
        </div>
        <img class="movie-image" src="${finalUrl}" alt="loading" />
        
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].original_title} </p>
        <div class="bookmark" onclick="func(this,${result2.data.results[i].id})"> </div>
      </div>
    </div>`;
      moviesDisplay.appendChild(div);
    }
  }
}

forMoviesLoadData();

// onclick display for free section

function displayOnclickFreeSection() {
  let moviesDisplay = document.getElementById("movies-display");
  let TvDisplay = document.getElementById("tv-display");

  let movies = document.getElementById("main-free-to-watch-section-movies");
  let tv = document.getElementById("main-free-to-watch-section-tv");

  movies.addEventListener("click", () => {
    TvDisplay.style.display = "none";
    moviesDisplay.style.display = "flex";
    tv.style.backgroundColor = "white";
    tv.style.color = "black";
    movies.style.backgroundColor = "#0d253f";
    movies.style.color = "#01b4e4";
  });
  tv.addEventListener("click", () => {
    TvDisplay.style.display = "flex";
    moviesDisplay.style.display = "none";
    movies.style.backgroundColor = "white";
    movies.style.color = "black";
    tv.style.backgroundColor = "#0d253f";
    tv.style.color = "#01b4e4";
  });
}
displayOnclickFreeSection();

function func(event, id) {
  event.classList.toggle("bookmarksave");
  console.log(id);
  let obj = {};
  let bookmark = JSON.parse(localStorage.getItem("bookmark")) || obj;

  if (bookmark.hasOwnProperty(id)) {
    delete bookmark[id];
  } else {
    bookmark[id] = true;
  }
  console.log("LN52", bookmark);
  let x = JSON.stringify(bookmark);
  localStorage.setItem("bookmark", x);
}

let home = document.getElementById("home");
home.onclick = () => {
  window.location = "index.html";
};

let mybookmarks = document.getElementById("my-bookmarks");

console.log(mybookmarks);

mybookmarks.onclick = () => {
  window.location = "bookmark.html";
};
