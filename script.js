// ==============================
// MOBILE MENU
// ==============================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// FUNDRAISER CALENDAR
// ==============================

const calendarButtons =
    document.querySelectorAll(".calendar button");

calendarButtons.forEach(button => {

    button.addEventListener("click", () => {

        const date = button.textContent;

        alert(
            "You selected July " +
            date +
            ". Thank you for supporting Allure Unity & Beauty!"
        );

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});


// ==============================
// SCROLL ANIMATION
// ==============================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.1
        }

    );


sections.forEach(section => {

    observer.observe(section);

});