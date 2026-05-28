document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. THEME TOGGLE LOGICA (MET MEMORY)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if(themeToggle) themeToggle.textContent = '🌙 Dark';
    } else {
        document.body.classList.remove('light-mode');
        if(themeToggle) themeToggle.textContent = '☀️ Light';
    }

    if(themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                themeToggle.textContent = '🌙 Dark';
                localStorage.setItem('theme', 'light');
            } else {
                themeToggle.textContent = '☀️ Light';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ==========================================
    // 2. 3D TILT EFFECT LOGICA
    // ==========================================
    const tiltCards = document.querySelectorAll('.js-tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
            
            const rotateX = ((y / rect.height) - 0.5) * -12; 
            const rotateY = ((x / rect.width) - 0.5) * 12;   
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
});