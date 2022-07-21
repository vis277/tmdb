// async function getData(url) {
//   const result = await axios.get(url);
//   return result;
// }

let content = document.getElementById("content");
console.log(content);

// let doSearch = document.getElementById("click-search-button");
// console.log(doSearch);
// const loadData = async () => {
//   const baseUrl =
//     "https://api.themoviedb.org/3/search/movie?api_key=24661393e867b3b4a85f3f759a76a9d5&query=Jack+Reacher";
//   console.log(search.value);
//   let url = baseUrl + "&query=" + search.value;
//   console.log(url);
//   const result2 = await getData(url);
//   console.log(result2);
//   let baseUrlImg = "https://image.tmdb.org/t/p/w500";
//   for (let i = 0; i < result2.data.results.length; i++) {
//     //   console.log(result2.data.results[i].backdrop_path);
//     let finalUrl = baseUrlImg + result2.data.results[i].backdrop_path;
//     //   console.log(finalUrl);
//     let div = document.createElement("div");
//     div.className = "card";
//     // div.innerHTML = `<img src="${finalUrl}" />`;
//     div.innerHTML = `<div class="card-container">
//         <div class="image-conatiner">
//         <div class="rating-container">
//             <span> ${result2.data.results[i].vote_average}</span>
//           </div>
//           <img class="movie-image" src="${finalUrl}" alt="loading" />

//         </div>
//         <div class="name-conainer">
//           <p>${result2.data.results[i].original_title} </p>
//         </div>
//       </div>`;
//     content.appendChild(div);
//   }
// };

// loadData();
