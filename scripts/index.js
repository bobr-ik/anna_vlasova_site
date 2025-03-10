let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Скрываем все слайды
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Показываем текущий слайд
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Переход к следующему слайду
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Переход к предыдущему слайду
  showSlide(currentSlide);
}

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);