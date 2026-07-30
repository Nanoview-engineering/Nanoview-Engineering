// ==========================================
// NanoView Engineering
// Main JavaScript
// Part 1
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("NanoView Engineering website loaded.");

    // ==============================
    // Active Navigation Link
    // ==============================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

    // ==============================
    // Button Hover Animation
    // ==============================

    const buttons = document.querySelectorAll(".btn, .quote-btn, .service-btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", function () {

            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

});

// ==========================================
// NanoView Engineering
// Main JavaScript
// Part 2
// ==========================================

// ==============================
// Header Shadow on Scroll
// ==============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.18)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.10)";

    }

});


// ==============================
// Fade-in Animation
// ==============================

const animatedSections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},{

    threshold:0.15

});


animatedSections.forEach(function(section){

    section.style.opacity = "0";

    section.style.transform = "translateY(40px)";

    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// ==============================
// Image Hover Effect
// ==============================

const images = document.querySelectorAll("img");

images.forEach(function(image){

    image.addEventListener("mouseenter", function(){

        this.style.transform = "scale(1.03)";

        this.style.transition = "0.4s ease";

    });

    image.addEventListener("mouseleave", function(){

        this.style.transform = "scale(1)";

    });

});


// ==============================
// Service Card Animation
// ==============================

const serviceCards = document.querySelectorAll(".service-box, .service-card");

serviceCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        this.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", function(){

        this.style.transform = "translateY(0)";

    });

});

console.log("Animations loaded successfully.");

// ==========================================
// NanoView Engineering
// Main JavaScript
// Part 3
// ==========================================

// ==============================
// Smooth Page Fade-In
// ==============================

window.addEventListener("load", function(){

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.5s ease";


// ==============================
// Scroll To Top Button
// ==============================

const scrollButton = document.createElement("button");

scrollButton.innerHTML = "↑";

scrollButton.id = "scrollTopBtn";

document.body.appendChild(scrollButton);

scrollButton.style.position = "fixed";
scrollButton.style.bottom = "25px";
scrollButton.style.right = "25px";
scrollButton.style.width = "50px";
scrollButton.style.height = "50px";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "50%";
scrollButton.style.background = "#F39C12";
scrollButton.style.color = "#fff";
scrollButton.style.fontSize = "22px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
scrollButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.25)";
scrollButton.style.zIndex = "999";

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        scrollButton.style.display = "block";

    }else{

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// Contact Form Validation
// ==============================

const contactForm = document.querySelector("form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        if(name && email && message){

            if(name.value.trim() === "" ||
               email.value.trim() === "" ||
               message.value.trim() === ""){

                e.preventDefault();

                alert("Please complete all required fields.");

                return;

            }

        }

    });

}


// ==============================
// External Links
// ==============================

document.querySelectorAll('a[target="_blank"]').forEach(link=>{

    link.setAttribute("rel","noopener noreferrer");

});


// ==============================
// Console Message
// ==============================

console.log("NanoView Engineering Website Ready!");