let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  // Скрываем все слайды
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });


  // Показываем текущий слайд
  if (slides[index]) {
    slides[index].classList.add('active');
  }
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


function openPopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'flex';
}
  
function closePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

function telegram() {
    window.open('https://t.me/Vlasova_Boriskovskaya');
}

function whatsapp() {
    window.open('https://wa.me/79055377637');
}

function phone() {
    window.open('tel:+79055377637');
}

function navbar_link(page) {
    window.location.href = page;
}

function telegram_chanell() {
    window.open('https://t.me/anna_VB_psy');
}

function vk() {
  window.open('https://vk.com/anna_vlasova_boriskovskaya')
}

function b17() {
  window.open('https://www.b17.ru/id803880/')
}

function instagram() {
  window.open('https://www.instagram.com/anna_vlasovaa2004')
}