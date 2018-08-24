document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('filter-button');

  button.addEventListener('click', () => {
    const keyword = document.getElementById('search').value;
    if (keyword) window.socket.emit('keyword', keyword);
  });
});