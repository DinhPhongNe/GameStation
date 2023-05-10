
document.addEventListener('DOMContentLoaded', function() {
    let GA = document.querySelector('.box-container');
    async function fetchGA(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();
  
            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                GA.innerHTML += `
                <div class="box">
                <h1 id="GA-title">${response[i].title}</h1>
                <img id="GA-img" src="${response[i].thumbnail}" alt="">
                <p id="GA-decs">${response[i].short_description}</p>
                <span id="GA-platform">${response[i].giveaway_url}</span>
              </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchGA('https://mmo-games.p.rapidapi.com/giveaways?rapidapi-key=ca83d18bb8mshb46500f38a9d35bp19469ejsne063916b5654');
  });

//   {
//     "id": 128103,
//     "title": "World of Warships: Hololive Vtuber Commander Pack Giveaway",
//     "keys_left": "99%",
//     "thumbnail": "https://www.mmobomb.com/file/2023/5/world-of-warships-hololive-giveaway-218x150.png",
//     "main_image": "https://www.mmobomb.com/file/2023/5/world-of-warships-hololive-giveaway.png",
//     "short_description": "To unlock your key instantly you just need to complete all the steps on the top.",
//     "giveaway_url": "https://www.mmobomb.com/giveaway/world-warships-hololive-vtuber"
//   },