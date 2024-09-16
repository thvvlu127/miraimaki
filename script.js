// Alterna a exibição do menu ao clicar no ícone
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Alterna a classe 'active' no menu
    });
});