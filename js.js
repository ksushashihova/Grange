const carousel = document.querySelector('.carousel ul');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

// Получаем ширину первой карточки + gap
const getScrollAmount = () => {
  const firstCard = carousel.querySelector('li');
  const style = window.getComputedStyle(firstCard);
  const width = firstCard.offsetWidth;
  const gap = parseInt(style.marginRight) || 0;
  return width + gap;
};

leftBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});
