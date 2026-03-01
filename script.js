console.log(
  `%cDeveloped & Designed by Mica Zayas ${String.fromCodePoint(0x0270c)}`,
  'color:#fff;background:black;padding:5px 10px;border-radius:3px;font-family:Verdana'
);

document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const item   = header.parentElement;
    const icon   = header.querySelector('.accordion__icon');
    const active = item.classList.toggle('accordion__item--active');
    if (icon) icon.textContent = active ? '×' : '+';
  });
});

const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    const a    = document.createElement('a');
    a.href     = './assets/cronograma.pdf';
    a.download = 'cronograma.pdf';
    a.click();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.js-reveal, .js-reveal-left').forEach(el => observer.observe(el));
