console.log("💜 BTS News Hub Loaded");

// Tunggu HTML selesai dimuat
window.addEventListener("DOMContentLoaded", function () {

  // API FETCH
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")

    .then((response) => response.json())

    .then((data) => {

      console.log("API berhasil diambil", data);

      // Container Home
      const homeContainer =
        document.getElementById("newsContainer");

      // Container News
      const newsPage =
        document.getElementById("newsPage");

      // Data berita BTS
      const beritaBTS = [

        {
          judul: "🔥 BTS Umumkan World Tour 2026",
          deskripsi:
            "BTS resmi mengumumkan konser dunia terbaru mereka tahun ini.",
          gambar: "images/bts8.png",
          kategori: "KONSER",
          tanggal: "17 Mei 2026"
        },

        {
          judul: "💜 Album Baru BTS Pecahkan Rekor",
          deskripsi:
            "Album terbaru BTS berhasil trending di Spotify dan Billboard.",
          gambar: "images/bts9.png",
          kategori: "MUSIK",
          tanggal: "16 Mei 2026"
        },

        {
          judul: "🎤 Jungkook Viral di TikTok",
          deskripsi:
            "ARMY kembali heboh dengan penampilan terbaru Jungkook.",
          gambar: "images/bts10.png",
          kategori: "VIRAL",
          tanggal: "15 Mei 2026"
        },

        {
          judul: "✨ RM Hadiri Fashion Week",
          deskripsi:
            "RM tampil memukau di acara fashion internasional minggu ini.",
          gambar: "images/bts4.jpg",
          kategori: "FASHION",
          tanggal: "14 Mei 2026"
        },

        {
          judul: "🎶 Lagu Baru BTS Trending #1",
          deskripsi:
            "Single terbaru BTS mendominasi chart musik global.",
          gambar: "images/bts6.png",
          kategori: "TRENDING",
          tanggal: "13 Mei 2026"
        },

        {
          judul: "🏟️ Konser BTS Sold Out",
          deskripsi:
            "Tiket konser BTS habis terjual hanya dalam beberapa menit.",
          gambar: "images/bts7.png",
          kategori: "EVENT",
          tanggal: "12 Mei 2026"
        }

      ];

      // Membuat Card Berita
      let cards = "";

      beritaBTS.forEach((item) => {

        cards += `

        <div class="col-md-6 col-lg-4 mb-4">

          <div 
            class="card shadow border-0 h-100"
            style="border-radius:18px; overflow:hidden;"
          >

            <img
              src="${item.gambar}"
              class="card-img-top"
              style="height:230px; object-fit:cover;"
            >

            <div class="card-body d-flex flex-column">

              <span 
                class="badge bg-dark mb-3"
                style="width:max-content;"
              >
                ${item.kategori}
              </span>

              <h5 class="fw-bold">
                ${item.judul}
              </h5>

              <p class="text-muted">
                ${item.deskripsi}
              </p>

              <div class="mt-auto">

                <small class="text-secondary d-block mb-3">
                  📅 ${item.tanggal}
                </small>

                <button class="btn btn-dark w-100">
                  Read More
                </button>

              </div>

            </div>

          </div>

        </div>

        `;

      });

      // Tampilkan di Home
      if (homeContainer) {

        homeContainer.innerHTML = cards;

      }

      // Tampilkan di News Page
      if (newsPage) {

        newsPage.innerHTML = cards;

      }

    })

    .catch((error) => {

      console.log("Error API:", error);

    });

});

// Alert Welcome
alert("💜 Selamat Datang di BTS News Hub!");