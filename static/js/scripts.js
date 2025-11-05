
const sidebare   = document.querySelector('#sidebare');
const container  = document.querySelector(".main .container");
const container__header  = document.querySelector(".container__header");
const container__content = document.querySelector(".container__content");
const header     = document.querySelector(".header");
const overlyne   = document.querySelector(".overlyne");
const hamb_close = document.querySelector(".hamb_close");



if (!document.body.contains(sidebare)) {
    container.classList.add('container_flop')
    container__header.classList.add("container_flop")
}

if (!document.body.contains(header)) {
    container__content.classList.add('reset_h');
}

function Hamb(){
    
    let hamb = document.querySelector('.hamb');
    
    hamb.addEventListener('click', (e) => {
        e.preventDefault();
        if(sidebare.classList.contains('visible')){
            sidebare.classList.remove('visible');
            overlyne.classList.remove('visible');
        }else{
            sidebare.classList.add('visible');
            overlyne.classList.add('visible');
        }
    });

    // OVERLYNE

    overlyne.addEventListener('click', (e) => {
        e.preventDefault();
        sidebare.classList.remove('visible');
        overlyne.classList.remove('visible');
    });

    // CLOSE NAV

    hamb_close.addEventListener('click', (e) => {
        e.preventDefault();
        sidebare.classList.remove('visible');
        overlyne.classList.remove('visible');
    });


}

Hamb()

function checkScreenSize() {
    if (window.innerWidth > 768) {
       sidebare.classList.remove('visible');
       overlyne.classList.remove('visible');
    } 
}

checkScreenSize();

window.addEventListener("resize", checkScreenSize);