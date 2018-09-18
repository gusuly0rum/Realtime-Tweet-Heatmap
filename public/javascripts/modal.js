document.addEventListener('DOMContentLoaded', () => {
  const close = document.querySelector('.close');
  const modal = document.getElementById('modal');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});