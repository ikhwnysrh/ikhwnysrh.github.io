document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = document.querySelector('.bi.bi-moon');
    const sunIcon = document.querySelector('.bi.bi-brightness-high');

    // Function to toggle icon
    function toggleIcon() {
        if (darkModeToggle.checked) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
        } else {
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
        }
    }

    // Function to set initial theme based on local storage
    function setInitialTheme() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        darkModeToggle.checked = isDarkMode;
        toggleIcon();
        document.body.classList.toggle('dark-mode', isDarkMode);
    }

    // Initial call to set theme
    setInitialTheme();

    // Event listener for checkbox change
    darkModeToggle.addEventListener('change', function() {
        localStorage.setItem('darkMode', darkModeToggle.checked);
        toggleIcon();
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});