class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar__desktop">
          <div class="navbar__links">
            <a href="index.html">Home</a>
            <a href="index.html#about">About</a>
            <a href="info.html">Info</a>
          </div>
          <div class="navbar__links navbar__links--logo">
            <img src="multimedia/impro-campa.svg" alt="Impro Campa 2026" width="120">
          </div>
          <div class="navbar__links">
            <a href="workshops.html">Workshops</a>
            <a href="#contacto">Contacto</a>
            <a href="registration.html">Comprar</a>
          </div>
        </div>
        <button class="navbar__toggle" aria-label="Abrir menú">MENU</button>
        <div class="navbar__mobile" id="navbar-mobile">
          <button class="navbar__close" aria-label="Cerrar menú">✖</button>
          <div class="navbar__links">
            <a href="index.html">Home</a>
            <a href="index.html#about">About</a>
            <a href="info.html">Info</a>
            <a href="workshops.html">Workshops</a>
            <a href="#contacto">Contacto</a>
            <a href="registration.html">Comprar</a>
          </div>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('.navbar__toggle');
    const close  = this.querySelector('.navbar__close');
    const menu   = this.querySelector('#navbar-mobile');
    const links  = this.querySelectorAll('.navbar__mobile a');

    const open  = () => menu.classList.add('navbar__mobile--open');
    const shut  = () => menu.classList.remove('navbar__mobile--open');

    toggle.addEventListener('click', open);
    close.addEventListener('click', shut);
    links.forEach(a => a.addEventListener('click', shut));
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer" id="contacto">
        <div class="footer__main">
          <div class="footer__col">
            <p class="footer__label">Organizadores</p>
            <div class="footer__logos">
              <a href="https://www.instagram.com/berlin_es_impro/" target="_blank" rel="noopener">
                <img class="footer__logo-img" src="multimedia/esimpro-logo.png" alt="ESIMPRO Berlín">
              </a>
              <a href="https://www.instagram.com/experienciaimpro/" target="_blank" rel="noopener">
                <img class="footer__logo-img" src="multimedia/logo-ei.svg" alt="Experiencia Impro">
              </a>
            </div>
            <div class="footer__socials">
              <a href="https://www.instagram.com/berlin_es_impro/" target="_blank" rel="noopener" class="footer__social-link">@berlin_es_impro</a>
              <a href="https://www.instagram.com/experienciaimpro/" target="_blank" rel="noopener" class="footer__social-link">@experienciaimpro</a>
            </div>
          </div>
          <div class="footer__col footer__col--center">
            <p class="footer__label">Contacto</p>
            <a href="#" data-email="escuela@berlinesimpro.com" class="footer__email">escuela@berlinesimpro.com</a>
            <a href="#" data-email="info@experienciaimpro.com" class="footer__email">info@experienciaimpro.com</a>
          </div>
          <div class="footer__col footer__col--right">
            <p class="footer__label">Links</p>
            <nav class="footer__nav">
              <a href="index.html" class="footer__nav-link">Home</a>
              <a href="info.html" class="footer__nav-link">Info</a>
              <a href="workshops.html" class="footer__nav-link">Workshops</a>
              <a href="faqs.html" class="footer__nav-link">FAQs</a>
              <a href="registration.html" class="footer__nav-link">Registrarse</a>
            </nav>
          </div>
        </div>
        <div class="footer__bottom">
          <p class="footer__credits">Made with 💙 by <span>Mica Zayas</span></p>
        </div>
      </footer>
    `;

    this.querySelectorAll('.footer__email').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const email = link.dataset.email;
        window.location.href = 'mailto:' + email;
        setTimeout(() => {
          if (!document.hasFocus()) return;
          if (confirm('¿Abrir con Gmail?\n\nCancelá para usar Outlook.')) {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + email, '_blank');
          } else {
            window.open('https://outlook.live.com/owa/?path=/mail/action/compose&to=' + email, '_blank');
          }
        }, 1000);
      });
    });
  }
}

class MarqueeBar extends HTMLElement {
  connectedCallback() {
    const item = ' 16 al 19 de julio - LANDHAUS, GRÖDEN - ALEMANIA - ';
    const items = Array.from({ length: 12 }, () => `<li class="marquee__item">${item}</li>`).join('');
    this.innerHTML = `
      <div class="marquee marquee--breakout">
        <div class="marquee--black marquee--ltr">
          <ul class="marquee__content">${items}</ul>
        </div>
      </div>
    `;
  }
}

customElements.define('site-navbar', NavBar);
customElements.define('site-footer', SiteFooter);
customElements.define('marquee-bar', MarqueeBar);
