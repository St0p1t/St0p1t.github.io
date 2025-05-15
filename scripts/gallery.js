const thumbs = document.querySelectorAll('.thumb');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const images = Array.from(thumbs).map(thumb => thumb.querySelector('img').src);

function openModal(index) {
  currentIndex = index;
  modalImg.src = images[currentIndex];
  modal.style.display = 'block';
  updateArrows();
}

function updateArrows() {
  leftArrow.classList.toggle('hidden', currentIndex === 0);
  rightArrow.classList.toggle('hidden', currentIndex === images.length - 1);
}

thumbs.forEach((thumb, i) => {
  thumb.addEventListener('click', () => openModal(i));
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

leftArrow.addEventListener('click', e => {
  e.stopPropagation();
  if (currentIndex > 0) openModal(currentIndex - 1);
});
rightArrow.addEventListener('click', e => {
  e.stopPropagation();
  if (currentIndex < images.length - 1) openModal(currentIndex + 1);
});