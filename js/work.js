document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK/LIGHT MODE LOGICA ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Controleer of de gebruiker al een voorkeur had opgeslagen
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙 Dark';
    }

    // Luister naar de klik op de knop
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Opslaan in local storage zodat het onthouden wordt
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Tekst van de knop aanpassen
        themeToggle.textContent = isLight ? '🌙 Dark' : '☀️ Light';
    });


    // --- 2. MODAL LOGICA (Jouw bestaande code) ---
    const modal = document.getElementById('mediaModal');
    const modalTarget = document.getElementById('modalTarget');
    const closeModal = document.querySelector('.close-modal');
    const triggerElements = document.querySelectorAll('.trigger-media');

    triggerElements.forEach(element => {
        element.addEventListener('click', () => {
            modalTarget.innerHTML = '';

            if (element.tagName === 'VIDEO') {
                const cloneVideo = document.createElement('video');
                cloneVideo.src = element.src;
                cloneVideo.controls = true;
                cloneVideo.autoplay = true;
                modalTarget.appendChild(cloneVideo);
            } else if (element.tagName === 'IMG') {
                const cloneImg = document.createElement('img');
                cloneImg.src = element.src;
                modalTarget.appendChild(cloneImg);
            }

            modal.classList.add('show');
        });
    });

    closeModal.addEventListener('click', () => {
        closeModalAction();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalAction();
        }
    });

    function closeModalAction() {
        modal.classList.remove('show');
        setTimeout(() => {
            modalTarget.innerHTML = '';
        }, 300);
    }
});