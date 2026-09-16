const menu = document.querySelector('.menu');
const nav = document.querySelector('.site-header nav');

// Mobile menu
if (menu && nav) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('open');
        menu.setAttribute(
            'aria-expanded',
            nav.classList.contains('open') ? 'true' : 'false'
        );
    });
}

// Correct scrolling for fixed header navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');

        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        const header = document.querySelector('.site-header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            30;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        // Close mobile navigation after selecting a section
        if (nav) {
            nav.classList.remove('open');
        }

        if (menu) {
            menu.setAttribute('aria-expanded', 'false');
        }
    });
});
