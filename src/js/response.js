document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeButton = document.querySelector('.mobile-menu .close-button');
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    const openMenu = () => {
        mobileMenu.classList.add('is-open');
        html.classList.add('no-scroll');
        body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('is-open');
        html.classList.remove('no-scroll');
        body.classList.remove('no-scroll');
    };

    if (hamburger && mobileMenu && closeButton) {
        hamburger.addEventListener('click', openMenu);
        closeButton.addEventListener('click', closeMenu);

        // Close on link click
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on outside click
        document.addEventListener('click', function (event) {
            if (mobileMenu.classList.contains('is-open') && !mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
                closeMenu();
            }
        });
    }
});