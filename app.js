// Selecionando elementos corretamente
let items = document.querySelectorAll('.slider .list .item');
let next = document.querySelector('.arrows .next'); // Selecionando o botão "next" corretamente
let prev = document.querySelector('.arrows .prev'); // Selecionando o botão "prev" corretamente
let thumbnails = document.querySelectorAll('.thumbnail .item');

let clicado = false

let home = document.querySelector('.menu .home-button');
let about = document.querySelector('.menu .about-us-button');
let cardapio = document.querySelector('.menu .cardapio-button');

let homeFooter = document.querySelector('.footer .navegacao .footer-home-button');
let aboutFooter = document.querySelector('.footer .navegacao .footer-about-us-button');
let cardapioFooter = document.querySelector('.footer .navegacao .footer-cardapio-button');

let width = window.screen.width;

// Configurações iniciais
let countItem = items.length;
let itemActive = 0;

// Evento para avançar para o próximo slide
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Evento para voltar ao slide anterior
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    if (clicado == false)
        next.click();
}, 10000)
// Função para exibir o slide ativo
function showSlider() {
    // Remover a classe 'active' de todos os itens e miniaturas
    items.forEach(item => item.classList.remove('active'));
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Adicionar a classe 'active' ao item e miniatura ativos
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// click thumbnail

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        clicado = true
        itemActive = index;
        showSlider();
    })
})

if (width < 768) {

    home.onclick = function () {
        window.scrollTo(0, 0)
    }
    about.onclick = function () {
        window.scrollTo(0, 870)
    }
    cardapio.onclick = function () {
        window.scrollTo(0, 3420)
    }

    homeFooter.onclick = function () {
        window.scrollTo(0, 0)
    }
    aboutFooter.onclick = function () {
        window.scrollTo(0, 870)
    }
    cardapioFooter.onclick = function () {
        window.scrollTo(0, 3420)
    }
}
else {

    home.onclick = function () {
        window.scrollTo(0, 0)
    }
    about.onclick = function () {
        window.scrollTo(0, 1000)
    }
    cardapio.onclick = function () {
        window.scrollTo(0, 1700)
    }

    homeFooter.onclick = function () {
        window.scrollTo(0, 0)
    }
    aboutFooter.onclick = function () {
        window.scrollTo(0, 1000)
    }
    cardapioFooter.onclick = function () {
        window.scrollTo(0, 1700)
    }

}

