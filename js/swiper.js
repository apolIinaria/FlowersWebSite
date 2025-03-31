// Ініціалізація слайдів
let slideIndex = 1;  // Тому що значення змінюється (переходить між слайдами)
showSlides(slideIndex);

// Функція для зміщення слайдів вперед або назад
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Функція для вибору конкретного слайду (клік на кружечок)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Основна функція для відображення слайдів
function showSlides(n) {
  const slides = document.getElementsByClassName("swiper-slide"); // Отримуємо всі слайди
  const dots = document.getElementsByClassName("swiper-pagination-bullet"); // Отримуємо всі кружечки пагінації

  if (n > slides.length) {slideIndex = 1} // Якщо більше, ніж кількість слайдів, починаємо з першого
  if (n < 1) {slideIndex = slides.length} // Якщо менше 1, переходимо до останнього слайду

  // Ховаємо всі слайди
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Відключаємо активний клас у всіх кружечків
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Показуємо поточний слайд
  slides[slideIndex-1].style.display = "block";

  // Додаємо клас "active" до активного кружечка
  dots[slideIndex-1].className += " active";
}

// Додаємо обробку кліків для пагінації (кружечків)
const bullets = document.querySelectorAll('.swiper-pagination-bullet');
bullets.forEach(function(bullet, index) {
  bullet.addEventListener('click', function() {
    currentSlide(index + 1);
  });
});