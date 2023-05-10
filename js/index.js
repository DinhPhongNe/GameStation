document.addEventListener('DOMContentLoaded', function() {
  let Game = document.querySelector('.box-container');
  async function fetchGame(url) {
      try {
          let data = await fetch(url);
          let response = await data.json();

          for (let i = 0; i < response.length; i++) {
              let description = response[i].description;
              let title = response[i].title;
              Game.innerHTML += `
              <div class="box">
              <h1 id="game-title">${response[i].title}</h1>
              <img id="game-img" src="${response[i].thumbnail}" alt="">
              <h3 id="game-genre">${response[i].genre}</h3>
              <span id="game-platform">${response[i].platform}</span>
              <p id="game-decs">${response[i].short_description}</p>
              <p id="game-rd">${response[i].release_date}</p>
              <p id="game-pb">${response[i].publisher}</p>
            </div>
     `;
          }
      } catch (err) {
          console.log(err);
      }
  }
  fetchGame('https://mmo-games.p.rapidapi.com/games?rapidapi-key=ca83d18bb8mshb46500f38a9d35bp19469ejsne063916b5654');
});

// {
//   "id": 1136,
//   "title": "Overwatch 2",
//   "thumbnail": "https://www.mmobomb.com/g/1136/thumbnail.jpg",
//   "short_description": "Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.",
//   "game_url": "https://www.mmobomb.com/open/overwatch-2",
//   "genre": "Shooter",
//   "platform": "PC (Windows)",
//   "publisher": "Activision Blizzard King",
//   "developer": "Blizzard Entertainment",
//   "release_date": "2022-10-04",
//   "profile_url": "https://www.mmobomb.com/overwatch-2"
// },
