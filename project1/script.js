let currentIndex = 0;

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const indicatorsContainer = document.querySelector(".indicators");

// Buat indikator dinamis
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    if (i === 0) indicator.classList.add("active");
    indicator.setAttribute("onclick", `goToSlide(${i})`);
    indicatorsContainer.appendChild(indicator);
}

function updateIndicators() {
    const indicators = document.querySelectorAll(".indicators div");
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlidePosition();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

// Otomatis berpindah slide setiap 5 detik
setInterval(() => {
    changeSlide(1);
}, 5000);


const loginButton = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form');
const closeButton = document.querySelector('.close-btn');

loginButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

