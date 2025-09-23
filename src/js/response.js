document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-button');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function () {
            mobileNav.classList.toggle('is-open');
            // Atualiza atributo de acessibilidade
            hamburger.setAttribute('aria-expanded', mobileNav.classList.contains('is-open'));
        });

        // Fecha o menu ao clicar em qualquer link do menu mobile
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
});