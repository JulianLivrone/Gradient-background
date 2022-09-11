const h3Info = document.querySelector('.gradient-info');
const h3Direction = document.querySelector('.gradient-direction');
const inputColor1 = document.querySelector('.input-color1');
const inputColor2 = document.querySelector('.input-color2');
const body = document.querySelector('#body');
const button = document.querySelector('.button');
const topArrow = document.querySelector('.top-arrow');
const leftArrow = document.querySelector('.left-arrow');
const bottomArrow = document.querySelector('.bottom-arrow');
const rightArrow = document.querySelector('.right-arrow');
let gradientDirection = 'to right';

const setGradient = () => {
  body.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value})`;

  button.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value})`;

  h3Info.textContent = `${body.style.background};`;
  h3Direction.textContent = `Gradient Direction: ${gradientDirection}`;
};

const changeGradientDirection = (e) => {
  switch (e.target.classList[1]) {
    case 'top-arrow':
      gradientDirection = 'to top';
      break;
    case 'left-arrow':
      gradientDirection = 'to left';
      break;
    case 'bottom-arrow':
      gradientDirection = 'to bottom';
      break;
    case 'right-arrow':
      gradientDirection = 'to right';
      break;
    default:
      gradientDirection = 'to right';
  }

  setGradient();
};

const generateRandomGradient = () => {
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);

  inputColor1.value = '#' + randomColor1;
  inputColor2.value = '#' + randomColor2;

  setGradient();
};

inputColor1.addEventListener('input', setGradient);
inputColor2.addEventListener('input', setGradient);

window.addEventListener('load', setGradient);

button.addEventListener('click', generateRandomGradient);

topArrow.addEventListener('click', changeGradientDirection);
leftArrow.addEventListener('click', changeGradientDirection);
bottomArrow.addEventListener('click', changeGradientDirection);
rightArrow.addEventListener('click', changeGradientDirection);
