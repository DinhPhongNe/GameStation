document.addEventListener('DOMContentLoaded', function() {
    let F2P = document.querySelector('.box-container');
    async function fetchF2P(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();
  
            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                F2P.innerHTML += `
                <div class="box">
                <h1 id="game-title">${response[i].title}</h1>
                <img id="game-img" src="${response[i].thumbnail}" alt="">
                <h1 id="game-worth">${response[i].worth}</h1>
                <h3 id="game-genre">${response[i].type}</h3>
                <span id="game-platform">${response[i].platforms}</span>
                <p id="game-decs">${response[i].description}</p>
                <p id="game-AC">${response[i].status}</p>
                <p id="game-rd">${response[i].published_date}</p>
                <p id="game-pb">${response[i].end_date}</p>
              </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchF2P('https://gamerpower.p.rapidapi.com/api/giveaways?rapidapi-key=ca83d18bb8mshb46500f38a9d35bp19469ejsne063916b5654');
  });

//   {
//     "id": 2353,
//     "title": "Subcube remastered (itch.io) Giveaway",
//     "worth": "$3.99",
//     "thumbnail": "https://www.gamerpower.com/offers/1/645a8f16e66dd.jpg",
//     "image": "https://www.gamerpower.com/offers/1b/645a8f16e66dd.jpg",
//     "description": "Download Subcube remastered without any cost via itch.io! Subcube remastered is a brain-teasing puzzle game that will keep you entertained for hours.",
//     "instructions": "1. Click the button \"Download or Claim\" before the offer expires.\r\n2. Login into your itch.io account to access the game.",
//     "open_giveaway_url": "https://www.gamerpower.com/open/subcube-remastered-itch-io-giveaway",
//     "published_date": "2023-05-09 14:21:10",
//     "type": "Game",
//     "platforms": "PC, Itch.io, DRM-Free",
//     "end_date": "2023-05-10 23:59:00",
//     "users": 720,
//     "status": "Active",
//     "gamerpower_url": "https://www.gamerpower.com/subcube-remastered-itch-io-giveaway",
//     "open_giveaway": "https://www.gamerpower.com/open/subcube-remastered-itch-io-giveaway"
//   },