// async function getData(url) {
//   const result = await axios.get(url);
//   return result;
// }
async function getData(url) {
  const result = await fetch(url);

  const parsedResult = await result.json();
  console.log("ln13", parsedResult);
  return { data: parsedResult };
}

let content = document.getElementById("content");
console.log(content);
let bookmark = JSON.parse(localStorage.getItem("bookmark")) || {};
const loadData = async () => {
  let url =
    "https://api.themoviedb.org/3/person/popular?api_key=24661393e867b3b4a85f3f759a76a9d5";
  let result2 = await getData(url);
  console.log(result2);
  let baseUrl = "https://image.tmdb.org/t/p/w500";
  for (let i = 0; i < result2.data.results.length; i++) {
    if (result2.data.results[i].profile_path) {
      //   console.log(result2.data.results[i].profile_path);
      let finalUrl = baseUrl + result2.data.results[i].profile_path;
      //   console.log(finalUrl);
      let div = document.createElement("div");
      div.className = "card";
      // div.innerHTML = `<img src="${finalUrl}" />`;
      div.innerHTML = `<div class="card-container">
      <div class="image-conatiner">
        <img class="movie-image" src="${finalUrl}" alt="loading" />
      </div>
      <div class="name-conainer">
        <p>${result2.data.results[i].name} </p>
      </div>
      <div class="short-description">
      <p> ${
        result2.data.results[i].known_for[0].title ||
        result2.data.results[i].known_for[1].title ||
        // result2.data.results[i].known_for[2].title ||
        result2.data.results[i].known_for[0].original_name ||
        result2.data.results[i].known_for[1].original_name ||
        result2.data.results[i].known_for[2].original_name
      }</p>
      <div class="bookmark" onclick="func(this,${
        result2.data.results[i].id
      })"> </div>
      </div>
    </div>`;
      content.appendChild(div);
    }
  }
  let arr = JSON.stringify(result2.data.results);
  // console.log(arr);
  localStorage.setItem("popularPeople", arr);
};

loadData();
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
// header section
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
// tv popular redirection

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

let home = document.getElementById("home");
home.onclick = () => {
  window.location = "index.html";
};

let mybookmarks = document.getElementById("my-bookmarks");

console.log(mybookmarks);

mybookmarks.onclick = () => {
  window.location = "bookmark.html";
};
