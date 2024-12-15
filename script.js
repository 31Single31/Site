// Когда весь контент загрузится, выполним JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Выбираем заголовок <h1> в шапке
    const header = document.querySelector('header h1');
    header.style.cursor = 'pointer'; // Делаем заголовок кликабельным

    // Добавляем событие клика на заголовок
    header.addEventListener('click', () => {
        alert('Вы кликнули по заголовку! Добро пожаловать на сайт.');
    });

    // Меняем цвет ссылок в навигации при наведении мыши
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#FFD700'; // Золотистый цвет
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = 'white'; // Возвращаем белый цвет
        });
    });
});
