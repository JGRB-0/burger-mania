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

let imagem = document.querySelector('.about .imagens .box-imagens');
let nextImageButton1 = document.querySelector('.about .imagens .box-imagens .flavio-e-ana-paula .next-image-button1');
let nextImageButton2 = document.querySelector('.about .imagens .box-imagens .flavio-e-ana-paula .next-image-button2');

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

const scrollToTop = () => {
    window.scrollTo(0, 0);
};
const scrollToAbout = () => {
    window.scrollTo(0, width < 768 ? 870 : 1000);
};
const scrollToMenu = () => {
    window.scrollTo(0, width < 768 ? 4320 : 2600);
};

home.onclick = scrollToTop;
about.onclick = scrollToAbout;
cardapio.onclick = scrollToMenu;

homeFooter.onclick = scrollToTop;
aboutFooter.onclick = scrollToAbout;
cardapioFooter.onclick = scrollToMenu;

const scrollToNext1 = () => {
    imagem.scrollTo(350, 0);
}

const scrollToNext2 = () => {
    imagem.scrollTo(700, 0);
}

nextImageButton1.onclick = scrollToNext1;
nextImageButton2.onclick = scrollToNext2;
