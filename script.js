// ketika layar di scroll 
window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.backdropFilter = "blur(5px)";
      document.getElementById("navbar").style.marginTop = "0"; 
      document.getElementById("navbar").style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
      document.getElementById("button").classList.remove('visually-hidden');
    } else {
      document.getElementById("navbar").style.background = "none";
      document.getElementById("navbar").style.marginTop = "12px";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("button").classList.add('visually-hidden');
    }
  }


// DarkMode
// Fungsi untuk mengaktifkan mode gelap
// function enableDarkMode() {
//   document.documentElement.setAttribute('data-bs-theme', 'dark');
//   localStorage.setItem('theme', 'dark');
// }
// // Fungsi untuk menonaktifkan mode gelap
// function disableDarkMode() {
//   document.documentElement.setAttribute('data-bs-theme', 'light');
//   localStorage.setItem('theme', 'light');
// }
// // Fungsi untuk memeriksa status mode gelap saat halaman dimuat
// function checkDarkMode() {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// }
// // Tambahkan event listener untuk tombol toggle
// const darkModeToggle = document.getElementById('darkModeToggle');
// darkModeToggle.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-bs-theme');
//   if (currentTheme === 'dark') {
//     disableDarkMode();
//   } else {
//     enableDarkMode();
//   }
// });
// // Panggil fungsi untuk memeriksa status mode gelap saat halaman dimuat
// checkDarkMode();
// function toggleDarkMode() {
//   const switchElement = document.getElementById('switch');
//   const body = document.body;
//   const moonIcon = document.querySelector('.icon--moon');
//   const sunIcon = document.querySelector('.icon--sun');

//   if (switchElement.checked) {
//     body.setAttribute('data-bs-theme', 'dark');
//     localStorage.setItem('darkMode', 'enabled');
//   } else {
//     body.setAttribute('data-bs-theme', 'light');
//     localStorage.setItem('darkMode', 'disabled');
//   }
// }

// // Check if dark mode is enabled from local storage
// document.addEventListener('DOMContentLoaded', function () {
//   const darkMode = localStorage.getItem('darkMode');
//   const switchElement = document.getElementById('switch');

//   if (darkMode === 'enabled') {
//     switchElement.checked = true;
//     toggleDarkMode();
//   }
// });

// // Listen for change event on the switch
// const switchElement = document.getElementById('switch');
// switchElement.addEventListener('change', toggleDarkMode);
const toggleSwitch = document.querySelector('.input');
const currentTheme = localStorage.getItem('theme');

// Check current theme on page load
if (currentTheme) {
  document.documentElement.setAttribute('data-bs-theme', currentTheme);
  if (currentTheme === 'light') {
    toggleSwitch.checked = true;
  }
}

// Toggle theme function
function toggleTheme() {
  if (toggleSwitch.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Event listener for checkbox change
toggleSwitch.addEventListener('change', toggleTheme);


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

    // Panggil fungsi saat halaman dimuat
    window.onload = function() {
      // Atur posisi scroll ke atas
      window.scrollTo(0, 0);
  };