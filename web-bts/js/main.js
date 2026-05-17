alert("💜 Selamat Datang di BTS News Hub!");

fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
  .then((response) => response.json())
  .then(() => {

    const homeContainer = document.getElementById("newsContainer");
    const newsPage = document.getElementById("newsPage");

    const beritaBTS = [

      {
        title: "🔥 BTS Umumkan World Tour 2026",
        desc: "BTS resmi mengumumkan world tour terbaru setelah comeback besar mereka.",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
      },

      {
        title: "💜 Album Baru BTS Pecahkan Rekor",
        desc: "Album terbaru BTS berhasil masuk Billboard Global dan trending di Spotify.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
      },

      {
        title: "🎤 Jungkook Viral di Media Sosial",
        desc: "ARMY kembali heboh dengan penampilan Jungkook terbaru.",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
      },

      {
        title: "✨ RM dan Jin Hadiri Event Fashion",
        desc: "Member BTS tampil di event internasional minggu ini.",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
      },

      {
        title: "🎶 Lagu Baru BTS Trending #1",
        desc: "Single terbaru BTS mendominasi chart musik dunia.",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
      },

      {
        title: "🏟️ Konser BTS Sold Out",
        desc: "Tiket konser comeback BTS habis dalam beberapa menit.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
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

    if(homeContainer){
      homeContainer.innerHTML = cards;
    }

    if(newsPage){
      newsPage.innerHTML = cards;
    }

  })
  .catch((error) => {
    console.log(error);
  });
