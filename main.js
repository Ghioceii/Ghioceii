const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const image = document.querySelector('.masti');
const lista = document.querySelector('.lista');
const galerie = document.querySelector('.galerie-lista');
const membri = document.querySelector('.membri-lista');
const piese = document.querySelector('.piese-lista');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: '80%', ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 1.3, {x: -1000}, {x: 0, ease: Power2.easeInOut}, "-=1")
.fromTo(image, 1.3, {y: -1000}, {y: 0, ease: Power2.easeInOut}, "-=0.5")
.fromTo(lista, 1.3, {x: -1000}, {x: 0, ease: Power2.easeInOut}, "-=1")
.fromTo(piese, 0.5, {x: -1000}, {x: 0, ease: Power2.easeInOut}, "-=0.2")
.fromTo(membri, 0.5, {x: -1000}, {x: 0, ease: Power2.easeInOut}, "-=0.4")
.fromTo(galerie, 0.5, {x: -1000}, {x: 0, ease: Power2.easeInOut}, "-=0.6");