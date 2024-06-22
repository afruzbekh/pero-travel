setTimeout(() => {
  document.querySelector(".preloader").style.animation =
    "fadeInFromNone 3s ease-in-out forwards";
}, 2000);

setTimeout(() => {
  document.querySelector(".preloader").style.display = "none";
}, 5000);

// --------------------------------------------------------------------------------------------------- //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    // Remove the class to enable scrolling
    body.classList.remove("no-scroll");
  } else {
    // Add the class to disable scrolling
    body.classList.add("no-scroll");
  }
});

// ---------------------------------------------------------------------------------- //
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themePreference = localStorage.getItem("theme");
  if (themePreference === "dark") {
    body.classList.add("dark-theme");
    themeToggle.checked = true;
  }
});

document.getElementById("theme-toggle").addEventListener("click", (e) => {
  const checked = e.target.checked;
  document.body.setAttribute("theme", checked ? "dark" : "light");
});

// ---------------------------------------------------------------------------------- //

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 10,

  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 170,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 1000,
});

// ------------------------------------------------------------------------------------------ //

let fullHeightImages = document.querySelectorAll(".about_us__img");
fullHeightImages.forEach((image) => {
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      image.style.overflow = "auto";
    } else {
      image.style.overflow = "hidden";
    }
  });
  observer.observe(image);
});

// -------------------------------------------------------------------------------------------------- //

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// -------------------------------------------------------------------------------------------------- //
function reveal__left() {
  let reveals_up = document.querySelectorAll(".reveal__left");

  for (let i = 0; i < reveals_up.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals_up[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals_up[i].classList.add("active");
    } else {
      reveals_up[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal__left);

// -------------------------------------------------------------------------------------------------- //
let swiper2 = new Swiper(".my-swiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  scrollbar: {
    el: ".my-swiper-scrollbar2",
    hide: false,
  },
  navigation: {
    nextEl: ".my-swiper-next2",
    prevEl: ".my-swiper-prev2",
  },
  loop: true,
  speed: 1000,
});

// -------------------------------------------------------------------------------------------------- //

let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");

btn.onclick = function () {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active-btn");
};

// -------------------------------------------------------------------------------------------------- //

function checkform() {
  let f = document.getElementById("form-question").elements;
  let cansubmit = true;
  for (let i = 0; i < f.length; i++) {
    if (f[i].value.length == 0 && f[i].type !== "submit") cansubmit = false;
  }
  document.getElementById("btn").disabled = !cansubmit;
}

let formInputs = document.querySelectorAll("#form-question input");
formInputs.forEach(function (input) {
  input.addEventListener("keyup", checkform);
});
