document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.mailchimp-trigger');
    const customPopup = document.getElementById('customPopup');
    const closePopup = document.querySelector('.close-popup');
    
    // Открытие попапа
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            customPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Закрытие попапа при клике на крестик
    closePopup.addEventListener('click', () => {
        customPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Закрытие попапа при клике вне формы
    customPopup.addEventListener('click', (e) => {
        if (e.target === customPopup) {
            customPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

