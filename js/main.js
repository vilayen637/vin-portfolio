document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. DYNAMIC THEME SWITCH (DARK / LIGHT MODE)
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
                localStorage.setItem('theme', 'light'); // Sla op in browsergeheugen
            } else {
                themeToggle.textContent = '☀️ Light';
                localStorage.setItem('theme', 'dark');  // Sla op in browsergeheugen
            }
        });
    }

    // ==========================================
    // 2. MODAL POP-UP LOGICA (CLICK ME BUTTON)
    // ==========================================
    const modal = document.getElementById('customModal');
    const openModalBtn = document.getElementById('messageBtn');
    const closeModalX = document.querySelector('.close-btn');
    const closeModalBtn = document.getElementById('modalCloseBtn');

    // Open de pop-up als er op 'Click Me!' wordt geklikt
    if(openModalBtn) {
        openModalBtn.addEventListener('click', function() {
            if(modal) modal.style.display = 'flex';
        });
    }

    // Sluit de pop-up via het kruisje (X)
    if(closeModalX) {
        closeModalX.addEventListener('click', function() {
            if(modal) modal.style.display = 'none';
        });
    }

    // Sluit de pop-up via de grote oranje knop onderaan
    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            if(modal) modal.style.display = 'none';
        });
    }

    // Sluit de pop-up als de bezoeker ergens buiten de box klikt
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
