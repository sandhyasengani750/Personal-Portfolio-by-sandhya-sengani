// =====================================
// WAIT FOR PAGE TO LOAD
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // PRELOADER
    // ===========================

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        if (preloader) {

            preloader.style.opacity = "0";

            preloader.style.visibility = "hidden";

            setTimeout(() => {

                preloader.style.display = "none";

            }, 500);

        }

    });

    // ===========================
    // TYPING EFFECT
    // ===========================

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [
            "Frontend Developer",
            "BCA Student",
            "Web Designer",
            "UI Designer",
            "Tech Enthusiast"
        ];

        let wordIndex = 0;
        let letterIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typing.textContent =
                    currentWord.substring(0, letterIndex);

                letterIndex++;

                if (letterIndex > currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;

                }

            } else {

                typing.textContent =
                    currentWord.substring(0, letterIndex);

                letterIndex--;

                if (letterIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {

                        wordIndex = 0;

                    }

                }

            }

            setTimeout(typeEffect, deleting ? 60 : 120);

        }

        typeEffect();

    }

    // ===========================
    // SCROLL PROGRESS BAR
    // ===========================

    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (window.scrollY / totalHeight) * 100;

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

    });

    // ===========================
    // ACTIVE NAVBAR
    // ===========================

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // ===========================
    // HEADER BACKGROUND
    // ===========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background =
                "rgba(15,23,42,.98)";

            header.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.3)";

        } else {

            header.style.background =
                "rgba(15,23,42,.95)";

            header.style.boxShadow = "none";

        }

    });

    // ===========================
    // SCROLL REVEAL
    // ===========================

    const revealElements =
        document.querySelectorAll(
            ".about,.education,.skills,.internship,.projects,.certificates,.contact"
        );

    revealElements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(60px)";

        el.style.transition =
            "all .8s ease";

    });

    function revealOnScroll() {

        revealElements.forEach(el => {

            const top =
                el.getBoundingClientRect().top;

            if (top < window.innerHeight - 120) {

                el.style.opacity = "1";

                el.style.transform =
                    "translateY(0px)";

            }

        });

    }

    revealOnScroll();

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    // ===========================
    // SCROLL TO TOP BUTTON
    // ===========================

    const topBtn =
        document.createElement("button");

    topBtn.id = "topBtn";

    topBtn.innerHTML = "↑";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ===========================
    // MOBILE MENU
    // ===========================

    const menuBtn =
        document.querySelector(".menu-btn");

    const nav =
        document.querySelector(".nav-links");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            if (nav.style.display === "flex") {

                nav.style.display = "none";

            } else {

                nav.style.display = "flex";

                nav.style.flexDirection = "column";

                nav.style.position = "absolute";

                nav.style.top = "80px";

                nav.style.left = "0";

                nav.style.width = "100%";

                nav.style.background = "#0f172a";

                nav.style.padding = "25px";

                nav.style.gap = "20px";

            }

        });

    }

    // ===========================
    // SMOOTH SCROLL
    // ===========================

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (target) {

                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            });

        });

    // ===========================
    // CONSOLE MESSAGE
    // ===========================

    console.log(
        "Sandhya Sengani Portfolio Loaded Successfully"
    );

});