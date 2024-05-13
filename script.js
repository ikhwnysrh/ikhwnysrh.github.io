// ketika layar di scroll 
document.addEventListener('gesturestart', function (e) {
  e.preventDefault();
});

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

  function projectCarousel() {
    let certificateCarousel = document.querySelector(".certificate-carousel");
    let projectCarousel = document.querySelector(".project-carousel");
    let certificate = document.querySelector(".certificate");
    let project = document.querySelector(".project");

    certificate.attributes.removeNamedItem("style");
    project.style.color = "#00acff";
    project.style.borderBottom = "#00acff 4px solid";
    certificateCarousel.classList.add("d-none");
    certificateCarousel.classList.remove("d-block");
    projectCarousel.classList.remove("d-none");
    projectCarousel.classList.add("d-block");
  }
  function certifCarousel() {
    let certificateCarousel = document.querySelector(".certificate-carousel");
    let projectCarousel = document.querySelector(".project-carousel");
    let certificate = document.querySelector(".certificate");
    let project = document.querySelector(".project");

    project.attributes.removeNamedItem("style");
    certificate.style.color = "#00acff";
    certificate.style.borderBottom = "#00acff 4px solid";
    certificateCarousel.classList.remove("d-none");
    certificateCarousel.classList.add("d-block");
    projectCarousel.classList.add("d-none");
  }
