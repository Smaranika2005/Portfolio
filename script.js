const text = ['Aspiring Software Engineer', 'Frontend Developer', 'DSA Enthusiast'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}

function erase() {
  if (index > 0) {
    letter = currentText.slice(0, --index);
    document.querySelector('.typing').textContent = letter;
    setTimeout(erase, 50);
  } else {
    count++;
    setTimeout(type, 200);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, 500);
});
function openTab(tabName) {
  const tabLinks = document.getElementsByClassName("tab-links");
  const tabContents = document.getElementsByClassName("tab-contents");

  for (let link of tabLinks) {
    link.classList.remove("active-link");
  }

  for (let content of tabContents) {
    content.classList.remove("active-tab");
  }

  document.getElementById(tabName).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}
VanillaTilt.init(document.querySelector(".about-img img"), {
  max: 70,             // max tilt rotation (in degrees)
  speed: 500,          // speed of enter/exit transition
  glare: true,         // adds glare effect
  "max-glare": 0.3     // max glare opacity
});
gsap.registerPlugin(ScrollTrigger);

gsap.to(".slider-track", {
  x: () => `-${document.querySelector(".slider-track").scrollWidth - window.innerWidth}px`,
  ease: "none",
  scrollTrigger: {
    trigger: ".image-slider",
    start: "top top",
    end: () => `+=${document.querySelector(".slider-track").scrollWidth}`,
    pin: true,
    scrub: true,
    anticipatePin: 1,
  }
});

let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        next.addEventListener('click', function() {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function() {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        });
const workCards = document.querySelectorAll('.work-card');

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});


