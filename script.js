const h3 = document.querySelector('.gradient-info');
const inputColor1 = document.querySelector('.input-color1');
const inputColor2 = document.querySelector('.input-color2');
const body = document.querySelector('#body');
const button = document.querySelector('.button');

const setGradient = () => {
  body.style.background =
    'linear-gradient(to right, ' +
    inputColor1.value +
    ', ' +
    inputColor2.value +
    ')';

  button.style.background =
    'linear-gradient(to right, ' +
    inputColor1.value +
    ', ' +
    inputColor2.value +
    ')';

  h3.textContent = body.style.background + ';';
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
