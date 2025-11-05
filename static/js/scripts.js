
const sidebare = document.querySelector('#sidebare');
const container = document.querySelector(".main .container");
const container__header = document.querySelector(".container__header");
const container__content = document.querySelector(".container__content");
const header = document.querySelector(".header");



if (!document.body.contains(sidebare)) {
    container.classList.add('container_flop')
    container__header.classList.add("container_flop")
}

if (!document.body.contains(header)) {
    container__content.classList.add('reset_h');
}