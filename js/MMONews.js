document.addEventListener('DOMContentLoaded', function() {
    let News = document.querySelector('.box-container');
    async function fetchNews(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();
  
            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                News.innerHTML += `
                <div class="box">
                <h1 id="News-title">${response[i].title}</h1>
                <img id="News-img" src="${response[i].thumbnail}" alt="">
                <p id="News-decs">${response[i].short_description}</p>
                <p id="News-rd">${response[i].article_content}</p>
              </div>
       `;
            }
        } catch (err) {
            console.log(err);
        }
    }
    fetchNews('https://mmo-games.p.rapidapi.com/latestnews?rapidapi-key=ca83d18bb8mshb46500f38a9d35bp19469ejsne063916b5654');
  });
  
//   {
//     "id": 134370,
//     "title": "Ironmace Announces Delay Of Dark And Darker Early Access",
//     "short_description": "They ask would-be players to continue to “hold the line”.",
//     "thumbnail": "https://www.mmobomb.com/file/2023/5/dark-darker-early-access-delay-218x150.jpg",
//     "main_image": "https://www.mmobomb.com/file/2023/5/dark-darker-early-access-delay.jpg",
//     "article_content": "<p><img class=\"type:primaryImage aligncenter size-large\" src=\"https://www.mmobomb.com/file/2023/5/dark-darker-early-access-delay-812x456.jpg\" alt=\"Dark And Darker Early Access Delay\" width=\"812\" height=\"456\" /></p>\r\n<p>It would seem that things are not progressing the way Dark and Darker developer, Ironmace, would have hoped. <a title=\"Dark And Darker Steam Reinstatement Request\" href=\"https://www.mmobomb.com/news/dark-darker-lawyers-appeal-to-steam-to-bring-back-game\">Following a request to Steam</a> to have their game reinstated on the platform, the company has instead informed players via its Discord channel that they would have to wait longer for early access.</p>\r\n<p>The note – which was shared on Twitter – explains that they can’t talk much about what’s going on “due to the sensitive nature of [their] current situation.\" The likely translation of this is that things are pretty unruly <a href=\"https://www.mmobomb.com/nexon-copyright-infringement-case-against-dark-darker-official-looks-terrible-ironmace\" target=\"_blank\" rel=\"noopener\">between them and Nexon right now</a>. Of course, Steam isn’t going to step into the middle of that until things have been cleared up one way or another. That kind of makes it difficult for an Early Access to go forward.</p>\r\n<p>The post still seemed fairly optimistic and made it sound like the developer is perhaps using this downtime to take care of some things on the development side. And once again, they ask their would-be players to “hold the line just a little longer”.</p>\r\n<blockquote class=\"twitter-tweet tw-align-center\">\r\n<p dir=\"ltr\" lang=\"en\">Early Acess has been delayed a bit.<br /><br />But we know what to do.<br /><br />🫡🛡️ HOLD THE LINE 🛡️🫡<a href=\"https://twitter.com/hashtag/DarkAndDarker?src=hash&amp;ref_src=twsrc%5Etfw\">#DarkAndDarker</a> <a href=\"https://t.co/MPSaKUuhbZ\">pic.twitter.com/MPSaKUuhbZ</a></p>\r\n— Dark and Darker (@DarkandDarkerEN) <a href=\"https://twitter.com/DarkandDarkerEN/status/1655932481789632514?ref_src=twsrc%5Etfw\">May 9, 2023</a></blockquote>\r\n<p>\r\n<script src=\"https://platform.twitter.com/widgets.js\"></script>\r\n</p>",
//     "article_url": "https://www.mmobomb.com/news/ironmace-announces-delay-of-dark-darker-early-access"
//   },
  