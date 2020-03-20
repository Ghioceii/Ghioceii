const text = document.querySelector('.text');
const body = document.getElementsByTagName('body');

const tl = new TimelineMax();

tl.fromTo(text, 1, {x: '-1150'}, {x: '0', ease: Power2.easeInOut})
.fromTo(body, 1, {x: '-1300'}, {x: '0'})