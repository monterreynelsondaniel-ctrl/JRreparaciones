document.addEventListener('DOMContentLoaded', () => {
    const rotatingMessage = document.querySelector('#heroRotatingMessage');
    const whatsappButton = document.querySelector('.whatsapp-floating');

    if (whatsappButton) {
        const updateWhatsappTooltip = () => {
            whatsappButton.classList.toggle('is-revealed', window.scrollY > 120);
        };

        window.addEventListener('scroll', updateWhatsappTooltip, { passive: true });
        updateWhatsappTooltip();
    }

    if (!rotatingMessage) {
        return;
    }

    const messages = [
        'SEGURIDAD',
        'RAPIDEZ',
        'CONFIANZA',
        'GARANTÍA',
        'CALIDAD',
        'EXPERIENCIA'
    ];
    let currentMessage = 0;

    window.setInterval(() => {
        rotatingMessage.classList.add('message-out');

        window.setTimeout(() => {
            currentMessage = (currentMessage + 1) % messages.length;
            rotatingMessage.textContent = messages[currentMessage];
            rotatingMessage.classList.remove('message-out');
        }, 500);
    }, 2000);
});
