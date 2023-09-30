window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      document.getElementById("navbar").style.backdropFilter = "blur(3px)";
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