const contactModal = document.getElementById('contact-modal');
const openContactBtn = document.getElementById('get_in_touch_button');

openContactBtn.addEventListener('click', () => {
  contactModal.classList.add('active');
  const dialog = contactModal.querySelector('.modal-dialog');
  void dialog.offsetWidth;
});

function closeModal() {
  contactModal.classList.remove('active');
}

contactModal.addEventListener('click', e => {
  if (e.target === contactModal) closeModal();
});