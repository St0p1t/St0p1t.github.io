const nav = document.getElementById('nav');
const secondSection = document.getElementById('case_studies');
const triggerPoint = secondSection.offsetTop;

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= triggerPoint) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });
});