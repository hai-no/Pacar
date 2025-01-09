document.title = "Do u Wanna be My Gf?";

let waktuPutus = 5;
let jumlahMantan = 1;

document.querySelector(".say-yes").addEventListener("click", (ev) => {
  document.querySelector("#slide-1").style.display = "none";
  document.querySelector("#slide-2").style.display = "block";
  document.querySelector("#putusKita").innerHTML = waktuPutus;
  putusTimeOut();
});

function putusTimeOut() {
  waktuPutus--;
  document.querySelector("#putusKita").innerHTML = waktuPutus;
  if (waktuPutus > 0) {
    setTimeout(() => {
      putusTimeOut();
    }, 1000);
  } else {
    document.title = "Keluar sana!";
    document.querySelector("#keluarSana").style.display = "block";
    setTimeout(() => {
      document.querySelector("#slide-2").style.display = "none";
      document.querySelector("#slide-3").style.display = "block";
      document.querySelector("#jumlahMantan").innerHTML = jumlahMantan; // Tampilkan jumlah mantan
      setTimeout(() => {
        document.title = "Bye bye...";
        jumlahMantan++; // Tambah jumlah mantan setiap kali
        document.querySelector("#jumlahMantan").innerHTML = jumlahMantan;
        setTimeout(() => {
          document.querySelector("#byebye").style.display = "block";
        }, 2000);
      }, 1000);
    }, 5000);
  }
}

// Fungsi tombol "Ga" bergerak ke posisi acak dalam batas layar
const sayNoButton = document.querySelector(".say-no");

function moveButtonRandomly() {
  const screenWidth = window.innerWidth; // Lebar layar
  const screenHeight = window.innerHeight; // Tinggi layar

  const buttonWidth = sayNoButton.offsetWidth;
  const buttonHeight = sayNoButton.offsetHeight;

  // Hitung area aman untuk tombol bergerak
  const maxX = screenWidth - buttonWidth;
  const maxY = screenHeight - buttonHeight;

  // Tentukan posisi acak dalam batas layar
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Pindahkan tombol ke posisi baru
  sayNoButton.style.left = randomX + "px";
  sayNoButton.style.top = randomY + "px";
}

// Event listener untuk menggerakkan tombol "Ga"
sayNoButton.addEventListener("mouseover", moveButtonRandomly);

// Pastikan posisi tombol "Ga" absolut untuk pergerakan
sayNoButton.style.position = "absolute";
