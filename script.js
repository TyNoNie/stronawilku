const menuButton = document.getElementById('menu');
const navButtons = document.getElementById('nav-buttons');

// Nasłuchiwanie kliknięcia w menu burgerowe
menuButton.addEventListener('click', function() {
    // Toggle dodanie/zdjęcie klasy 'menu-open' z kontenera przycisków nawigacyjnych
    navButtons.classList.toggle('menu-open');
});

const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg'
];

let currentImageIndex = 0;
let nextImageIndex = 1;
const backgroundLayer1 = document.getElementById('backgroundLayer1');
const backgroundLayer2 = document.getElementById('backgroundLayer2');

// Funkcja zmieniająca tło z płynnością
function changeBackgroundImage() {
    // Ustawiamy obraz na drugiej warstwie
    backgroundLayer2.style.backgroundImage = `url(${images[nextImageIndex]})`;

    // Ustawiamy drugą warstwę na widoczną (opacity: 1)
    backgroundLayer2.style.opacity = 1;

    // Zmniejszamy opacity dla warstwy 1, aby zaczęła znikać
    backgroundLayer1.style.opacity = 0;

    // Przechodzimy do zmiany warstw po animacji
    setTimeout(() => {
        // Przełączamy warstwy, aby druga stała się pierwszą
        backgroundLayer1.style.backgroundImage = `url(${images[nextImageIndex]})`;
        backgroundLayer1.style.opacity = 1;
        backgroundLayer2.style.opacity = 0;

        // Uaktualniamy indeksy obrazów
        currentImageIndex = nextImageIndex;
        nextImageIndex = (nextImageIndex + 1) % images.length;
    }, 1000); // Czas przejścia opacity w sekundach
}

// Zmieniamy tło co 5 sekund
setInterval(changeBackgroundImage, 5000);

// Ustawiamy początkowy obraz tła na warstwie 1
backgroundLayer1.style.backgroundImage = `url(${images[currentImageIndex]})`;




// Funkcja do pokazania sekcji atrakcje
function showAttractions() {
    // Ukryj sekcję główną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję atrakcji
    document.querySelector('#attractions').style="display: block;";
    document.querySelector('#attractions').classList.add('active');
}

// Funkcja do pokazania sekcji głównej
function showMain() {
    // Ukryj sekcję atrakcji
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję główną
    document.querySelector('#main').style="display: block;";
    document.querySelector('#main').classList.add('active');
}

// Na początku pokazujemy sekcję główną
document.querySelector('#main').classList.add('active');
