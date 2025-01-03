document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // YouTube popup functionality
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="video-container">
                <iframe width="560" height="315" src="" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const demoButton = document.querySelector('.btn-demo');
    const closeModal = document.querySelector('.close-modal');
    const iframe = modal.querySelector('iframe');

    demoButton.addEventListener('click', (e) => {
        e.preventDefault();
        iframe.src = 'https://www.youtube.com/embed/YOUR_VIDEO_ID'; // Replace with your YouTube video ID
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            iframe.src = '';
            document.body.style.overflow = 'auto';
        }
    });

    // Находим все кнопки по специальному классу
    const downloadButtons = document.querySelectorAll('.mailchimp-trigger');
    
    // Обработчик для кнопок
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Проверяем загрузку Mailchimp
            if (window.chimpInstance && typeof window.chimpInstance.showModal === 'function') {
                window.chimpInstance.showModal();
            } else {
                // Если Mailchimp не загрузился сразу, ждем секунду и пробуем снова
                setTimeout(() => {
                    if (window.chimpInstance && typeof window.chimpInstance.showModal === 'function') {
                        window.chimpInstance.showModal();
                    } else {
                        console.error('Mailchimp popup is not available');
                    }
                }, 1000);
            }
        });
    });

    // Удаляем старый код модального окна для загрузки
    const downloadModal = document.getElementById('downloadModal');
    if (downloadModal) {
        downloadModal.remove();
    }
}); 