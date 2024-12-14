
// Get references to the menu button and navbar
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

// Toggle the menu and navbar when the menu button is clicked
menu.onclick = () => {
  menu.classList.toggle('fa-times'); // Toggle the 'fa-times' class on the menu button
  navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
}

// Get references to the theme toggler and toggle button
let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

// Toggle the theme toggler when the toggle button is clicked
toggleBtn.onclick = () => {
  themeToggler.classList.toggle('active'); // Toggle the 'active' class on the theme toggler
}

// Reset styles when scrolling
window.onscroll = () => {
  menu.classList.remove('fa-times'); // Remove the 'fa-times' class from the menu button
  navbar.classList.remove('active'); // Remove the 'active' class from the navbar
  themeToggler.classList.remove('active'); // Remove the 'active' class from the theme toggler
}

// Change the main color variable when a theme button is clicked
document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
  btn.onclick = () => {
    let color = btn.style.background; // Get the background color of the clicked theme button
    document.querySelector(':root').style.setProperty('--main-color', color); // Set the '--main-color' variable to the selected color
  }
});

// Initialize the home-slider using the Swiper library
var swiperHome = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

// Initialize the review-slider using the Swiper library
var swiperReview = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});
document.body.style.height = "100%"; // Set the height for full screen snow effect
        document.body.style.overflow = "hidden"; // Prevents scrollbars
        snowfall.snow({ color: "#ffffff", maxSize: 10, minSize: 5, round: true });