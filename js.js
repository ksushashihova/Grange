const carousel = document.querySelector('.carousel ul');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

const getScrollAmount = () => {
  const firstCard = carousel.querySelector('li');
  const style = window.getComputedStyle(firstCard);
  const width = firstCard.offsetWidth;
  const gap = parseInt(style.marginRight) || 0;
  return width + gap;
};

leftBtn.addEventListener('click', () => {
  const scrollAmount = getScrollAmount();
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  const scrollAmount = getScrollAmount();
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  if (carousel.scrollLeft + scrollAmount > maxScroll) {
    carousel.scrollTo({ left: maxScroll, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});
