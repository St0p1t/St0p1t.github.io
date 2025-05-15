const popup = document.getElementById('popup');
const closeBtn = popup.querySelector('.popup-btn');

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('popupClosed') === 'true') {
    return;
  }

  setTimeout(() => {
    popup.style.display = 'flex';
  }, 30000);

  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    localStorage.setItem('popupClosed', 'true');
  });

  if (localStorage.getItem('popupClosed') === 'true') {
    popup.style.display = 'none';
  }
});