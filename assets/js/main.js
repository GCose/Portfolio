/**===========================
 * Variables Declaration
 ===========================*/
const header = document.getElementById("header"),
  navMenu = document.getElementById("nav-menu"),
  navLinks = document.querySelectorAll(".nav__link"),
  navToggle = document.getElementById("nav-toggle");

/**=================================
 * Change Header Style on scroll
 =================================*/
window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

/**===============================
 * Open and close mobile view
 ===============================*/
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeToggleIcon();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
    changeToggleIcon();
  });
});

function changeToggleIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
  }
}

/**=================
 * Active Link
 =================*/
function addActiveLink() {
  const section = document.querySelectorAll("section[id]");
  section.forEach((section) => {
    const scrollY = window.scrollY,
      sectionTop = section.offsetTop - 120,
      sectionHeight = section.offsetHeight,
      sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__link[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", addActiveLink);

/**=============
 * Filter 
 =============*/
let mixMenu = mixitup(".portfolio__wrapper", {
  selectors: {
    target: ".portfolio__item",
  },
  animation: {
    duration: 800,
  },
});

const filterItems = document.querySelectorAll(".filter__item");

function activeFilterItem() {
  filterItems.forEach((item) => item.classList.remove("filter__item--active"));
  this.classList.add("filter__item--active");
}

filterItems.forEach((item) => item.addEventListener("click", activeFilterItem));

/**=======================================
 * ScrollReveal Animations
 =======================================*/
const sr = ScrollReveal({
  distance: "100px",
  duration: 2500,
  delay: 200,
  reset: true,
});

sr.reveal(".home__content, .home__image, .about__image, .about__content", {
  origin: "left",
  interval: 200,
});

sr.reveal(
  ".service__item, .experience__item, .portfolio__item, .testimonial__wrapper, .contact__content, .contact__form, .footer__name, .footer__occupation, .footer__social",
  {
    origin: "top",
    interval: 200,
  }
);

sr.reveal(".footer__copyright, .footer__list", {
  origin: "bottom",
  interval: 200,
});
