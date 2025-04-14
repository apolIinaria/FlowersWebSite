const countdown = () => {
    const endDate = new Date("June 4, 2025 23:59:59").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<div>Акція завершена!</div>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  };

  countdown();
  setInterval(countdown, 1000);