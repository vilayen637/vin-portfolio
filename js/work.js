document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DARK/LIGHT MODE LOGICA ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

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


    // --- 2. MODAL LOGICA ---
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
