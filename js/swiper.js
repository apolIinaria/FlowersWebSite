
let index = 0;
  const carousel = document.querySelector(".carousel");
  const totalSlides = document.querySelectorAll(".feedback").length;
  const visibleSlides = 3;
  const pagination = document.querySelector(".pagination");
  let interval;

  const totalPages = Math.ceil(totalSlides / visibleSlides);
    for (let i = 0; i < totalPages; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      pagination.appendChild(dot);
    }

  const dots = document.querySelectorAll(".dot");

    function showSlide() {
      if (index >= totalPages) index = 0;
      if (index < 0) index = totalPages - 1;
      carousel.style.transform = `translateX(-${index * 100}%)`;
            
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
    }

    function goToSlide(slideIndex) {
      index = slideIndex;
      showSlide();
    }

    function nextSlide() {
      index++;
      showSlide();
    }

    function startAutoSlide() {
      interval = setInterval(nextSlide, 10000);
    }

    function stopAutoSlide() {
      clearInterval(interval);
    }

    startAutoSlide();

    document.querySelectorAll(".feedback").forEach((feedback) => {
    feedback.addEventListener("mouseenter", stopAutoSlide);
    feedback.addEventListener("mouseleave", startAutoSlide);
    });