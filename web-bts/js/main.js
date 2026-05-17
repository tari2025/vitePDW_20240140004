console.log("💜 BTS News Hub Loaded");

fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")

  .then((response) => response.json())

  .then((data) => {

    const newsPage =
      document.getElementById("newsPage");

    const homeContainer =
      document.getElementById("newsContainer");

    const judulBTS = [

      "🔥 BTS Umumkan World Tour 2026",
      "💜 Album Baru BTS Pecahkan Rekor",
      "🎤 Jungkook Viral di TikTok",
      "✨ RM Hadiri Fashion Week",
      "🎶 Lagu Baru BTS Trending #1",
      "🏟️ Konser BTS Sold Out"

    ];

    const deskripsiBTS = [

      "BTS resmi mengumumkan konser dunia terbaru mereka tahun ini.",

      "Album terbaru BTS berhasil trending di Spotify dan Billboard.",

      "ARMY kembali heboh dengan penampilan terbaru Jungkook.",

      "RM tampil memukau di acara fashion internasional minggu ini.",

      "Single terbaru BTS mendominasi chart musik global.",

      "Tiket konser BTS habis terjual hanya dalam beberapa menit."

    ];

    const gambarBTS = [

      "images/bts8.png",
      "images/bts9.png",
      "images/bts10.png",
      "images/bts4.jpg",
      "images/bts6.png",
      "images/bts7.png"

    ];

    let cards = "";

    data.forEach((post, index) => {

      cards += `

      <div class="col-md-4 mb-4">

        <div class="card shadow border-0 h-100">

          <img
            src="${gambarBTS[index]}"
            class="card-img-top"
          >

          <div class="card-body">

            <h5 class="fw-bold">

              ${judulBTS[index]}

            </h5>

            <p>

              ${deskripsiBTS[index]}

            </p>

            <button class="btn btn-dark w-100">

              Read More

            </button>

          </div>

        </div>

      </div>

      `;
    });

    // HOME
    if (homeContainer) {

      homeContainer.innerHTML = cards;

    }

    // NEWS
    if (newsPage) {

      newsPage.innerHTML = cards;

    }

  })

  .catch((error) => {

    console.log(error);

  });

alert("💜 Selamat Datang di BTS News Hub!");