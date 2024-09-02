// Cambio entre pantallas
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.querySelector(targetId).classList.add('active');
    });
});

document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.querySelector(targetId).classList.add('active');
    });
});
