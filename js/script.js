const maxTilt = 12;

document.querySelectorAll('.elementoproy').forEach(el => {

    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width  * 2 - 1;
        const y = (e.clientY - rect.top)  / rect.height * 2 - 1;

        const rotateY =  x * maxTilt;
        const rotateX = -y * maxTilt;

        el.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

        el.style.setProperty('--mx', `${(x + 1) / 2 * 100}%`);
        el.style.setProperty('--my', `${(y + 1) / 2 * 100}%`);
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform =
            'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    });

    el.addEventListener('click', () => {
        const url = el.dataset.href;
        if (url) window.location.href = url;
    });
});