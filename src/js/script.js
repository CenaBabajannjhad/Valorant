const hero = document.querySelector('#hero');
const header = document.querySelector('.header');
const newHeight = Math.abs(header.clientHeight - window.innerHeight);
hero.style.height = `${newHeight}px`;
