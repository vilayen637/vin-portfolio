document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // THEME
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙 Dark';
    }

    themeToggle.addEventListener('click', () => {

        body.classList.toggle('light-mode');

        const isLight = body.classList.contains('light-mode');

        localStorage.setItem('theme', isLight ? 'light' : 'dark');

        themeToggle.textContent = isLight ? '🌙 Dark' : '☀️ Light';
    });


    // GLOW EFFECT ONLY ON CARDS
    const cards = document.querySelectorAll('.contact-card');

    cards.forEach(card => {

        card.addEventListener('mousemove', (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });

    });

});