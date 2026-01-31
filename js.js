document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.querySelector('.carousel ul');
  const btnLeft = document.querySelector('.scroll-btn.left');
  const btnRight = document.querySelector('.scroll-btn.right');

  const scrollAmount = 350; // шаг прокрутки (можно менять)

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

});

