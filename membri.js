const team = document.querySelector('.team-section');
const text = document.getElementsByTagName('h1');
const img1 = document.querySelector('pe');
const button = document.getElementById('link');

const tl = new TimelineMax();

tl.fromTo(text, 1, {x: '-1000'}, {x: '0', ease: Power2.easeInOut})
.fromTo(button, 0.5, {opacity: '0'}, {opacity: 1, ease: Power2.easeInOut})
