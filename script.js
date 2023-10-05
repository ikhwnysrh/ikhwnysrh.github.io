window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.backdropFilter = "blur(4px)";
      document.getElementById("navbar").style.marginTop = "0"; 
      document.getElementById("navbar").style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.2)";
      document.getElementById("button").classList.remove('visually-hidden');
    } else {
      document.getElementById("navbar").style.background = "none";
      document.getElementById("navbar").style.marginTop = "12px";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("button").classList.add('visually-hidden');
    }
  }



// Fungsi untuk mengaktifkan mode gelap
function enableDarkMode() {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  localStorage.setItem('theme', 'dark');
}

// Fungsi untuk menonaktifkan mode gelap
function disableDarkMode() {
  document.documentElement.setAttribute('data-bs-theme', 'light');
  localStorage.setItem('theme', 'light');
}

// Fungsi untuk memeriksa status mode gelap saat halaman dimuat
function checkDarkMode() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

// Tambahkan event listener untuk tombol toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  if (currentTheme === 'dark') {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

// Panggil fungsi untuk memeriksa status mode gelap saat halaman dimuat
checkDarkMode();



// ketika navbar toggle muncul klik dimana saja untuk menutup
  document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan referensi elemen tombol toggle dan elemen navbar
    var toggleButton = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    // Menambahkan event listener untuk mengatasi klik di mana saja di halaman
    document.addEventListener("click", function (event) {
      if (
        navbarCollapse.classList.contains("show") &&
        !navbarCollapse.contains(event.target) &&
        event.target !== toggleButton
      ) {
        // Menutup navbar jika sudah terbuka dan pengguna mengklik di luar navbar
        toggleButton.click();
      }
    });
  }); 