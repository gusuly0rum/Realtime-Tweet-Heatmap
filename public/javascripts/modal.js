document.addEventListener('DOMContentLoaded', () => {
  const modalLeft = document.getElementById('modal-left');
  const closeLeft = modalLeft.querySelector('.close');
  closeLeft.addEventListener('click', () => {
    modalLeft.style.display = 'none';
  });
  
  const modalRight = document.getElementById('modal-right');
  const closeRight = modalRight.querySelector('.close');
  closeRight.addEventListener('click', () => {
    modalRight.style.display = 'none';
  });
});