const h3 = document.querySelector('.gradient-info');
const inputColor1 = document.querySelector('.input-color1');
const inputColor2 = document.querySelector('.input-color2');
const body = document.querySelector('#body');

const setGradient = () => {
  body.style.background =
    'linear-gradient(to right, ' +
    inputColor1.value +
    ', ' +
    inputColor2.value +
    ')';

  h3.textContent = body.style.background + ';';
};

inputColor1.addEventListener('input', setGradient);

inputColor2.addEventListener('input', setGradient);
