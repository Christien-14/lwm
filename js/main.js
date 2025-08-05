// Basculement de thème
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier la préférence de thème enregistrée
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Basculement du menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});