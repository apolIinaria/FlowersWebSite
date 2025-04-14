const petalsContainer = document.querySelector('.petals');

  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${5 + Math.random() * 5}s`;
    petal.style.opacity = Math.random();

    petalsContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 10000);
  }

  setInterval(createPetal, 800);