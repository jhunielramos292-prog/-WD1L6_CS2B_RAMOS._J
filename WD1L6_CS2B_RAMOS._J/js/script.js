
// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Automatically display the current year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Smooth navigation and close mobile menu after clicking
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarMenu = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarMenu.classList.contains("show")
            ) {
                const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
                menu.hide();
            }

        });

    });

    // Display a message in the browser console
    console.log("Developer Profile Website Successfully Loaded!");

});
