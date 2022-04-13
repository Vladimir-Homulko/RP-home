const exterior = document.getElementById('exterior');
const interior = document.getElementById('interior');
const yourPerfectColor = document.getElementById('your_perfect_color');

exterior.addEventListener('mouseenter', () => {
    exterior.classList.add('active');
    exterior.classList.remove('disabled');
    interior.classList.remove('active');
    interior.classList.add('disabled');
    yourPerfectColor.classList.remove('active');
    yourPerfectColor.classList.add('disabled');
});

interior.addEventListener('mouseenter', () => {
    interior.classList.add('active');
    interior.classList.remove('disabled');
    exterior.classList.remove('active');
    exterior.classList.add('disabled');
    yourPerfectColor.classList.remove('active');
    yourPerfectColor.classList.add('disabled');
});

yourPerfectColor.addEventListener('mouseenter', () => {
    yourPerfectColor.classList.add('active');
    yourPerfectColor.classList.remove('disabled');
    interior.classList.remove('active');
    interior.classList.add('disabled');
    exterior.classList.remove('active');
    exterior.classList.add('disabled');
});