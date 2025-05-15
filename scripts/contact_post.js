const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const errorDisplay = document.getElementById('form-error');
const submitBtn = form.querySelector('button[type="submit"]');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?[0-9\s()-]{10,15}$/;
  const russianTextRegex = /^[А-Яа-яЁё\s.,!?"'()-]+$/;
  const isNotNoneRegex = /^\s*$/;

  if (!emailRegex.test(email)) {
    errorDisplay.textContent = 'Неверный email формат.';
    return;
  }
  if (!phoneRegex.test(phone)) {
    errorDisplay.textContent = 'Введите корректный номер телефона.';
    return;
  }
  if (isNotNoneRegex.test(message)) {
    errorDisplay.textContent = 'Введите сообщение.';
    return;
  }
  if (!russianTextRegex.test(message)) {
    errorDisplay.textContent = 'Сообщение должно быть только на русском языке.';
    return;
  }
  errorDisplay.textContent = '';
  submitBtn.textContent = 'Отправляем...';
  submitBtn.style.backgroundColor = '#807014';
  submitBtn.disabled = true;
    
  await delay(5000);

  fetch(form.action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ email, phone, message })
  })
  .then(res => {
    submitBtn.textContent = 'Успешно отправлено';
    submitBtn.classList.add('success');
    submitBtn.style.backgroundColor = '#3F8E00';
    submitBtn.disabled = false;
  })
  .catch(err => {
    submitBtn.textContent = 'Успешно отправлено';
    submitBtn.classList.add('success');
    submitBtn.style.backgroundColor = '#3F8E00';
    submitBtn.disabled = false;
  });
});