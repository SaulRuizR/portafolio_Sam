document.addEventListener('DOMContentLoaded', function(){
    inciarApp();
});

function inciarApp(){
    const mobileMenu = document.querySelector('.header__menuMobil');

    mobileMenu.addEventListener('click', function(){
        const navegacion = document.querySelector('.header__navegacion');

        navegacion.classList.toggle('mostrar');
    });
}