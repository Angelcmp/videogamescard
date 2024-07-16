/* SECCION ELEMENTOS DOM */
const header = document.querySelector('header');
const header_title = document.getElementById('header_title');
const parrafo_juego = document.getElementById('parrafo_juego');
const d_btn1 = document.getElementById('d_btn1');
const d_btn2 = document.getElementById('d_btn2');
const slider_btn = document.querySelectorAll('.dot');

/* SECCION DEL SLIDER */
const backimg = {
    fimg: 'img/bg1.png',
    simg: 'img/dragons-slider.jpg',
    timg: 'img/horizonbg.jpeg',
    eimg: 'img/eldenringbg.jpg',
    gtaimg: 'img/gta6.png',
    cardimg: 'img/main-slider.jpg'
}

/* FUNCION SLIDER */ 
const slider_load = (index) =>{
    const images = [backimg.fimg, backimg.simg, backimg.timg, backimg.eimg, backimg.gtaimg, backimg.cardimg]
    const titles = ["Desbloquea tu diversión", "DRAGON'S DOGMA 2", "HORIZON FORBIDDEN WEST", "ELDEN RING: SHADOW OF THE ERDTREE", "Grand Theft Auto VI", "GIFTS CARDS"]
    const parrafo = ["Encuentra las mejores tarjetas de regalo para tus juegos favoritos de Xbox, PlayStation, Valorant y League of Legends. ¡Accede a contenido exclusivo, descargas y mucho más para llevar tu experiencia de juego al siguiente nivel.", "Dragon’s Dogma es un juego de rol y acción basado en historia y para un jugador que te permite elegir tu propia experiencia: desde el aspecto de tu Arisen, a tu vocación, tu grupo, cómo afrontar las diferentes situaciones y mucho más. Ahora, en esta esperada secuela, el increíblemente detallado mundo de fantasía de Dragon’s Dogma 2 está aguardando a que lo explores.", "Acompaña a Aloy en su aventura por una peligrosa pero majestuosa nueva frontera con nuevas y misteriosas amenazas. Con la Complete Edition disfrutarás del aclamado Horizon Forbidden West completo en PC", "La expansión ELDEN RING Shadow of the Erdtree presenta una nueva historia que se sitúa en la Tierra de la Sombra y está repleta de misterios, calabozos peligrosos y nuevos enemigos, armas y equipamiento", "Grand Theft Auto VI (GTA VI) es el octavo juego principal de la serie, la tan esperada próxima entrega después de GTA V, que se lanzó en 2013. También es el decimosexto juego de la serie general del juego que ¡celebra el crimen que da nombre al juego!", "En videogamescard las tarjetas de regalo son el obsequio perfecto para los entusiastas de los videojuegos de todas las edades. Ofrecen la flexibilidad de elegir entre una amplia variedad de juegos, complementos y contenido descargable en sus plataformas favoritas"]

    header.style.background = `url(${images[index]}) no-repeat center center/cover`;
    header_title.innerText = titles[index];
    parrafo_juego.innerText = parrafo[index];

    slider_btn.forEach((btn, i)=>{
        btn.style.background = i === index ? "#fff" : "rgb(184,184,184,0.1)"
    })

    d_btn1.href = "#"
    d_btn2.href = "#"
};
/* INICIALIZA LA VARIABLE */
let currentIndex = 0;

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slider_btn.length;
    slider_load(currentIndex);
};

slider_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slider_load(currentIndex);
    });
});

/* INTERVALO DE TIEMPO */
setInterval(nextSlide, 15000);
slider_load(currentIndex);


const contenedor = document.getElementById('contenedor');
const imagen = document.getElementById('imagen');
const gif = document.getElementById('gif');

imagen.addEventListener('click', function() {
    gif.style.display = 'inline';
});

// Login basico

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Email:', email);
    console.log('Contraseña:', password);
    window.location.href = '/index.html'; 
});

// barra navegador

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.container');
    var navHeight = nav.offsetHeight;
    var scrollTop = window.scrollY;

    if (scrollTop > navHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

