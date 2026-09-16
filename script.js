const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.setAttribute(
      'aria-expanded',
      nav.classList.contains('open') ? 'true' : 'false'
    );
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const id = this.getAttribute('href');

    if (!id || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();

    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    if (nav) nav.classList.remove('open');
    if (menu) menu.setAttribute('aria-expanded', 'false');
  });
});
