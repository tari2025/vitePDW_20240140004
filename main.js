const newsPage = document.getElementById("newsPage");

const beritaBTS = [
  {
    title: "🔥 BTS Umumkan World Tour 2026",
    desc: "BTS resmi mengumumkan world tour terbaru setelah comeback besar mereka.",
    image: "images/bts6.png"
  },

  {
    title: "💜 Album Baru BTS Pecahkan Rekor",
    desc: "Album terbaru BTS berhasil trending di berbagai negara.",
    image: "images/bts7.png"
  },

  {
    title: "🎤 Jungkook Viral di Media Sosial",
    desc: "ARMY kembali heboh dengan penampilan terbaru Jungkook.",
    image: "images/bts8.png"
  },

  {
    title: "✨ RM dan Jin Hadiri Event Fashion",
    desc: "Member BTS tampil di event internasional minggu ini.",
    image: "images/bts9.png"
  }
];

let cards = "";

beritaBTS.forEach((item) => {
  cards += `
  
  <div class="col-md-6 col-lg-3 mb-4">

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

if(newsPage){
  newsPage.innerHTML = cards;
}