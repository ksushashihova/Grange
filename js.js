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

document.addEventListener('DOMContentLoaded', () => {

  // Берём почти все видимые элементы
  const elements = document.querySelectorAll(`
  section:not(.no-reveal),
  div:not(.no-reveal),
  img:not(.no-reveal),
  p:not(.no-reveal),
  a:not(.no-reveal),
  button:not(.no-reveal),
  li:not(.no-reveal),
  h1:not(.no-reveal),
  h2:not(.no-reveal),
  h3:not(.no-reveal)
`);

  elements.forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // один раз
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));

});

