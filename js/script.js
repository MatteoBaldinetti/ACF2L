const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navlink");
const navbarLogo = document.getElementById("navbar-logo")


window.addEventListener("scroll", () => {
    if (window.scrollY >= 56) {
        navbar.classList.add("navbar-scrolled")
        navbarLogo.src = "./assets/images/dark_logo.png"
        for (let i=0; i < navbarLinks.length; i++) {
            if (i == 0) {
                navbarLinks[i].classList.remove("navlink-active");
                navbarLinks[i].classList.add("dark-navlink-active");
            }
            navbarLinks[i].classList.remove("navlink");
            navbarLinks[i].classList.add("dark-navlink");
        }
    } else {
        navbar.classList.remove("navbar-scrolled")
        navbarLogo.src = "./assets/images/logo.png"
        for (let i=0; i < navbarLinks.length; i++) {
            if (i == 0) {
                navbarLinks[i].classList.add("navlink-active");
                navbarLinks[i].classList.remove("dark-navlink-active");
            }
            navbarLinks[i].classList.add("navlink");
            navbarLinks[i].classList.remove("dark-navlink");
        }
    }
});