// popular movies bookmark

let moviesPopulardata = JSON.parse(localStorage.getItem("moviesPopular"));
console.log("209", moviesPopulardata);

let content = document.getElementById("content");
console.log(content);

let bookmardata = JSON.parse(localStorage.getItem("bookmark")) || {};
console.log("212", bookmardata);
let bookmarkeys = Object.keys(bookmardata);
console.log("ln214", bookmarkeys);

let baseUrl = "https://image.tmdb.org/t/p/w500";
for (let i = 0; i < moviesPopulardata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < bookmarkeys.length; j++) {
    if (Number(moviesPopulardata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + moviesPopulardata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
        <div class="image-conatiner">
        <div class="rating-container">
            <span> ${moviesPopulardata[i].vote_average} ⭐</span>
          </div>
          <img class="movie-image" src="${finalUrl}" alt="loading" />
          
        </div>
        <div class="name-conainer">
          <p>${moviesPopulardata[i].original_title} </p>
          <i class="fa-solid fa-star bookmarksave" onclick="func(this,${moviesPopulardata[i].id})" title="Remove boookmark"></i>
        </div>
      </div>`;

      content.appendChild(div);
    }
  }
}
// airing today bookmarks

let airingTodaydata = JSON.parse(localStorage.getItem("airingToday"));

for (let i = 0; i < airingTodaydata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < bookmarkeys.length; j++) {
    if (Number(airingTodaydata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + airingTodaydata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
          <div class="image-conatiner">
          <div class="rating-container">
              <span> ${airingTodaydata[i].vote_average} ⭐</span>
            </div>
            <img class="movie-image" src="${finalUrl}" alt="loading" />
            
          </div>
          <div class="name-conainer">
            <p>${
              airingTodaydata[i].original_title ||
              airingTodaydata[i].original_name
            } </p>
            <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
              airingTodaydata[i].id
            })" title="Remove boookmark"></i>
          </div>
        </div>`;

      content.appendChild(div);
    }
  }
}
// getupcoming Bookmarks

let getupcomingdata = JSON.parse(localStorage.getItem("getUpcoming"));

for (let i = 0; i < getupcomingdata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < bookmarkeys.length; j++) {
    if (Number(getupcomingdata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + getupcomingdata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
            <div class="image-conatiner">
            <div class="rating-container">
                <span> ${getupcomingdata[i].vote_average} ⭐</span>
              </div>
              <img class="movie-image" src="${finalUrl}" alt="loading" />
              
            </div>
            <div class="name-conainer">
              <p>${
                getupcomingdata[i].original_title ||
                getupcomingdata[i].original_name
              } </p>
              <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                getupcomingdata[i].id
              })" title="Remove boookmark"></i>
            </div>
          </div>`;

      content.appendChild(div);
    }
  }
}

// nowpalying bookmarks
let nowplayingdata = JSON.parse(localStorage.getItem("nowPlaying"));

for (let i = 0; i < nowplayingdata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < bookmarkeys.length; j++) {
    if (Number(nowplayingdata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + nowplayingdata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
              <div class="image-conatiner">
              <div class="rating-container">
                  <span> ${nowplayingdata[i].vote_average} ⭐</span>
                </div>
                <img class="movie-image" src="${finalUrl}" alt="loading" />
                
              </div>
              <div class="name-conainer">
                <p>${
                  nowplayingdata[i].original_title ||
                  nowplayingdata[i].original_name
                } </p>
                <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                  nowplayingdata[i].id
                })" title="Remove boookmark"></i>
              </div>
            </div>`;

      content.appendChild(div);
    }
  }
}

// ontv bookmarks
let onTvdata = JSON.parse(localStorage.getItem("onTv"));

for (let i = 0; i < onTvdata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < bookmarkeys.length; j++) {
    if (Number(onTvdata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + onTvdata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
                <div class="image-conatiner">
                <div class="rating-container">
                    <span> ${onTvdata[i].vote_average} ⭐</span>
                  </div>
                  <img class="movie-image" src="${finalUrl}" alt="loading" />
                  
                </div>
                <div class="name-conainer">
                  <p>${
                    onTvdata[i].original_title || onTvdata[i].original_name
                  } </p>
                  <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                    onTvdata[i].id
                  })" title="Remove boookmark"></i>
                </div>
              </div>`;

      content.appendChild(div);
    }
  }
}

// popular tv bookmarks

let popularTvdata = JSON.parse(localStorage.getItem("popularTv"));
for (let i = 0; i < popularTvdata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < popularTvdata.length; j++) {
    if (Number(popularTvdata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + popularTvdata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
                  <div class="image-conatiner">
                  <div class="rating-container">
                      <span> ${popularTvdata[i].vote_average} ⭐</span>
                    </div>
                    <img class="movie-image" src="${finalUrl}" alt="loading" />
                    
                  </div>
                  <div class="name-conainer">
                    <p>${
                      popularTvdata[i].original_title ||
                      popularTvdata[i].original_name
                    } </p>
                    <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                      popularTvdata[i].id
                    })" title="Remove boookmark"></i>
                  </div>
                </div>`;

      content.appendChild(div);
    }
  }
}

let topRateddata = JSON.parse(localStorage.getItem("topRated"));

for (let i = 0; i < topRateddata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < topRateddata.length; j++) {
    if (Number(topRateddata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + topRateddata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
                    <div class="image-conatiner">
                    <div class="rating-container">
                        <span> ${topRateddata[i].vote_average} ⭐</span>
                      </div>
                      <img class="movie-image" src="${finalUrl}" alt="loading" />
                      
                    </div>
                    <div class="name-conainer">
                      <p>${
                        topRateddata[i].original_title ||
                        topRateddata[i].original_name
                      } </p>
                      <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                        topRateddata[i].id
                      })" title="Remove boookmark"></i>
                    </div>
                  </div>`;

      content.appendChild(div);
    }
  }
}

// top rated tv    topRatedTv

let topRatedTvdata = JSON.parse(localStorage.getItem("topRatedTv"));

for (let i = 0; i < topRatedTvdata.length; i++) {
  //   console.log("ln217", moviesPopulardata[i].id);
  //   console.log("ln218", Number(bookmarkeys[i]));
  for (let j = 0; j < topRatedTvdata.length; j++) {
    if (Number(topRatedTvdata[i].id == bookmarkeys[j])) {
      let finalUrl = baseUrl + topRatedTvdata[i].backdrop_path;

      let div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `<div class="card-container">
                      <div class="image-conatiner">
                      <div class="rating-container">
                          <span> ${topRatedTvdata[i].vote_average} ⭐</span>
                        </div>
                        <img class="movie-image" src="${finalUrl}" alt="loading" />
                        
                      </div>
                      <div class="name-conainer">
                        <p>${
                          topRatedTvdata[i].original_title ||
                          topRatedTvdata[i].original_name
                        } </p>
                        <i class="fa-solid fa-star bookmarksave" onclick="func(this,${
                          topRatedTvdata[i].id
                        })" title="Remove boookmark"></i>
                      </div>
                    </div>`;

      content.appendChild(div);
    }
  }
}

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
