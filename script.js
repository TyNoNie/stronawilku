
// do listy z odnośnikami do podstron

// document.getElementById('menu').addEventListener('click', function() {
//     const nav = document.querySelector('header nav ul');
//     nav.classList.toggle('lista');
// });



// do przycisków pokazujących sekcje

// const menuButton = document.getElementById('menu');
// const navButtons = document.getElementById('nav-buttons');

// // Nasłuchiwanie kliknięcia w menu burgerowe
// menuButton.addEventListener('click', function() {
//     // Toggle dodanie/zdjęcie klasy 'menu-open' z kontenera przycisków nawigacyjnych
//     navButtons.classList.toggle('menu-open');
// });

const menuButton = document.getElementById('menu');
const navButtons = document.getElementById('nav-buttons');
const navBtnList = navButtons.querySelectorAll('button');

// Kliknięcie w przycisk menu burgerowego
menuButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Nie zamykaj od razu
    navButtons.classList.toggle('menu-open');
});

// Kliknięcie poza menu lub burgerem — zamknij
document.addEventListener('click', function (event) {
    const isClickInsideMenu = navButtons.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        navButtons.classList.remove('menu-open');
    }
});

// Kliknięcie w którykolwiek z przycisków w menu — zamknij menu
navBtnList.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.classList.remove('menu-open');
    });
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



// dla odnośników zakomentować poniższy skrypt

// Funkcja do pokazania sekcji atrakcje
function showAttractions() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję atrakcji
    document.querySelector('#attractions').style="display: block;";
    document.querySelector('#attractions').classList.add('active');
}

// Funkcja do pokazania sekcji głównej
function showMain() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję główną
    document.querySelector('#main').style="display: block;";
    document.querySelector('#main').classList.add('active');
}

// Funkcja do pokazania sekcji cennika
function showCosts() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję cennika
    document.querySelector('#costs').style="display: block;";
    document.querySelector('#costs').classList.add('active');
}

// Funkcja do pokazania sekcji galerii
function showGallery() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję galerii
    document.querySelector('#gallery').style="display: block;";
    document.querySelector('#gallery').classList.add('active');
}

// Funkcja do pokazania sekcji kontakt
function showContact() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję kontakt
    document.querySelector('#contact').style="display: block;";
    document.querySelector('#contact').classList.add('active');
}

// Funkcja do pokazania sekcji regulamin
function showRules() {
    // Ukryj sekcję aktywną
    document.querySelector('.active').style="display: none;";
    document.querySelector('.active').classList.remove('active');
    // Pokaż sekcję regulamin
    document.querySelector('#rules').style="display: block;";
    document.querySelector('#rules').classList.add('active');
}

// Na początku pokazana sekcja główna, reszta ukryta
document.querySelector('#main').classList.add('active');
document.querySelector('#attractions').style="display: none;";
document.querySelector('#costs').style="display: none;";
document.querySelector('#gallery').style="display: none;";
document.querySelector('#contact').style="display: none;";
document.querySelector('#rules').style="display: none;";



// Galeria zdjęć
const totalImages = 42;
  let currentImage = 1;

  const galleryImage = document.getElementById('galleryImage');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function updateImage() {
    galleryImage.style.opacity = 0;
    setTimeout(() => {
      galleryImage.src = `galeria/jpg/${currentImage}.jpg`;
      galleryImage.alt = `Zdjęcie ${currentImage}`;
      galleryImage.style.opacity = 1;
    }, 200);
  }

  prev.addEventListener('click', () => {
    currentImage = (currentImage === 1) ? totalImages : currentImage - 1;
    updateImage();
  });

  next.addEventListener('click', () => {
    currentImage = (currentImage === totalImages) ? 1 : currentImage + 1;
    updateImage();
  });