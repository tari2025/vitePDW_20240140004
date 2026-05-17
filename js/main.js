console.log("💜 BTS News Hub Loaded");

const beritaBTS = [

  {
    title: "🔥 BTS Umumkan World Tour 2026",
    desc: "BTS resmi mengumumkan world tour terbaru setelah comeback besar mereka.",
    image: "images/bts1.jpg"
  },

  {
    title: "💜 Album Baru BTS Pecahkan Rekor",
    desc: "Album terbaru BTS berhasil masuk Billboard Global dan trending di Spotify.",
    image: "images/bts2.jpg"
  },

  {
    title: "🎤 Jungkook Viral di Media Sosial",
    desc: "ARMY kembali heboh dengan penampilan Jungkook terbaru.",
    image: "images/bts3.jpg"
  },

  {
    title: "✨ RM dan Jin Hadiri Event Fashion",
    desc: "Member BTS tampil di event internasional minggu ini.",
    image: "images/bts4.jpg"
  },

  {
    title: "🎶 Lagu Baru BTS Trending #1",
    desc: "Single terbaru BTS mendominasi chart musik dunia.",
    image: "images/bts6.png"
  },

  {
    title: "🏟️ Konser BTS Sold Out",
    desc: "Tiket konser comeback BTS habis dalam beberapa menit.",
    image: "images/bts7.png"
  }

];

let cards = "";

beritaBTS.forEach((item) => {

  cards += `

  <div class="col-md-4 mb-4">

    <div class="card shadow border-0 h-100">

      <img src="${item.image}" class="card-img-top">

      <div class="card-body">

        <h5 class="fw-bold">
          ${item.title}
        </h5>

        <p>
          ${item.desc}
        </p>

        <button class="btn btn-dark w-100">
          Read More
        </button>

      </div>

    </div>

  </div>

  `;
});

const newsPage = document.getElementById("newsPage");

if(newsPage){
  newsPage.innerHTML = cards;
}