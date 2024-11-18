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
}); 