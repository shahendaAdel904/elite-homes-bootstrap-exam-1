const tabs = document.querySelectorAll(".serviceTab");
const panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.bsTarget);

    tabs.forEach((t) => t.classList.remove("active"));
    panes.forEach((p) => p.classList.remove("show", "active"));

    tab.classList.add("active");
    target.classList.add("active");
    requestAnimationFrame(() => target.classList.add("show"));
  });
});

const homeLink = document.querySelector('.nav-link[href="#"].active');
const servicesLink = document.querySelector('.nav-link[href="#services"]');
const testimonialsLink = document.querySelector('.nav-link[href="#testimonials"]');
const faqLink = document.querySelector('.nav-link[href="#faq"]');
const contactLink = document.querySelector('.nav-link[href="#contact"]');

const servicesSection = document.getElementById("services");
const testimonialsSection = document.getElementById("testimonials");
const faqSection = document.getElementById("faq");
const contactSection = document.getElementById("contact");

let servicesVisible = false;
let testimonialsVisible = false;
let faqVisible = false;
let contactVisible = false;

function updateNav() {
  servicesLink.classList.toggle("active", servicesVisible);
  testimonialsLink.classList.toggle("active", testimonialsVisible);
  faqLink.classList.toggle("active", faqVisible);
  contactLink.classList.toggle("active", contactVisible);
  homeLink.classList.toggle(
    "active",
    !servicesVisible && !testimonialsVisible && !faqVisible && !contactVisible
  );
}

const options = { rootMargin: "-40% 0px -40% 0px" };

new IntersectionObserver(([entry]) => {
  servicesVisible = entry.isIntersecting;
  updateNav();
}, options).observe(servicesSection);

new IntersectionObserver(([entry]) => {
  testimonialsVisible = entry.isIntersecting;
  updateNav();
}, options).observe(testimonialsSection);

new IntersectionObserver(([entry]) => {
  faqVisible = entry.isIntersecting;
  updateNav();
}, options).observe(faqSection);

new IntersectionObserver(([entry]) => {
  contactVisible = entry.isIntersecting;
  updateNav();
}, options).observe(contactSection);

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".sliderDot");
const prevBtn = document.querySelector(".sliderPrev");
const nextBtn = document.querySelector(".sliderNext");

let current = 0;
let autoPlay;

function showSlide(index) {
  current = (index + slides.length) % slides.length;

  slides.forEach((s, i) => s.classList.toggle("active", i === current));
  dots.forEach((d, i) => d.classList.toggle("active", i === current));
}

function startAutoPlay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => showSlide(current + 1), 3000);
}

nextBtn.addEventListener("click", () => {
  showSlide(current + 1);
  startAutoPlay();
});

prevBtn.addEventListener("click", () => {
  showSlide(current - 1);
  startAutoPlay();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    startAutoPlay();
  });
});

startAutoPlay();

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach((item) => {
  item.querySelector(".faqQuestion").addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});