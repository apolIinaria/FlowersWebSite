document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart-button');
    const message = document.getElementById('cart-message');
  
    if (buttons.length > 0 && message) {
      buttons.forEach(button => {
        button.addEventListener('click', () => {

          message.style.position = 'fixed';
          message.style.top = '50%';
          message.style.left = '50%';
          message.style.transform = 'translate(-50%, -50%) scale(1)';
  
          message.classList.remove('hidden');
          message.classList.add('show');
  
          setTimeout(() => {
            message.classList.remove('show');
            message.classList.add('hidden');
          }, 3000);
        });
      });
    }
  });