const h3Info = document.querySelector('.gradient-info');
const h3Direction = document.querySelector('.gradient-direction');
const inputColor1 = document.querySelector('.input-color1');
const inputColor2 = document.querySelector('.input-color2');
const inputColor3 = document.querySelector('.input-color3');
const inputColor4 = document.querySelector('.input-color4');
const containerGradient = document.querySelector('.container-gradient');
const button = document.querySelector('.button');
const topArrow = document.querySelector('.top-arrow');
const leftArrow = document.querySelector('.left-arrow');
const bottomArrow = document.querySelector('.bottom-arrow');
const rightArrow = document.querySelector('.right-arrow');
let gradientDirection = 'to right';
const inputColorQuantity2 = document.querySelector('.input-colors-quantity2');
const inputColorQuantity3 = document.querySelector('.input-colors-quantity3');
const inputColorQuantity4 = document.querySelector('.input-colors-quantity4');
const labelInputColor3 = document.querySelector('.label-input-color3');
const labelInputColor4 = document.querySelector('.label-input-color4');
const selectAngle = document.querySelector('#angle');

const setGradient = () => {
  if (
    labelInputColor3.classList.contains('container-disable') &&
    labelInputColor4.classList.contains('container-disable')
  ) {
    containerGradient.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value})`;
    button.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value})`;

    h3Info.textContent = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value})`;
  } else if (
    labelInputColor3.classList.contains('container-disable') ||
    labelInputColor4.classList.contains('container-disable')
  ) {
    containerGradient.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value})`;
    button.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value})`;

    h3Info.textContent = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value})`;
  } else {
    containerGradient.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value}, ${inputColor4.value})`;
    button.style.background = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value}, ${inputColor4.value})`;

    h3Info.textContent = `linear-gradient(${gradientDirection}, ${inputColor1.value}, ${inputColor2.value}, ${inputColor3.value}, ${inputColor4.value})`;
  }
  h3Direction.textContent = `Gradient Direction: ${gradientDirection}`;
};

const changeGradientDirection = (e) => {
  if (e.type === 'click') {
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
    selectAngle.value = '0deg';
  } else if (e.type === 'keydown') {
    switch (e.key) {
      case 'ArrowUp':
        gradientDirection = 'to top';
        break;
      case 'ArrowLeft':
        gradientDirection = 'to left';
        break;
      case 'ArrowDown':
        gradientDirection = 'to bottom';
        break;
      case 'ArrowRight':
        gradientDirection = 'to right';
        break;
      default:
        gradientDirection = 'to right';
    }
    selectAngle.value = '0deg';
  } else if (e.type) {
    switch (selectAngle.value) {
      case '0deg':
        gradientDirection = '0deg';
        break;
      case '45deg':
        gradientDirection = '45deg';
        break;
      case '135deg':
        gradientDirection = '135deg';
        break;
      case '225deg':
        gradientDirection = '225deg';
        break;
      case '315deg':
        gradientDirection = '315deg';
        break;
      default:
        gradientDirection = '0deg';
    }
  } else {
    console.log('wrong event');
  }

  setGradient();
};

const generateRandomGradient = () => {
  if (
    labelInputColor3.classList.contains('container-disable') &&
    labelInputColor4.classList.contains('container-disable')
  ) {
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    inputColor1.value = '#' + randomColor1;
    inputColor2.value = '#' + randomColor2;
  } else if (
    labelInputColor3.classList.contains('container-disable') ||
    labelInputColor4.classList.contains('container-disable')
  ) {
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    inputColor1.value = '#' + randomColor1;
    inputColor2.value = '#' + randomColor2;
    inputColor3.value = '#' + randomColor3;
  } else {
    const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
    const randomColor4 = Math.floor(Math.random() * 16777215).toString(16);
    inputColor1.value = '#' + randomColor1;
    inputColor2.value = '#' + randomColor2;
    inputColor3.value = '#' + randomColor3;
    inputColor4.value = '#' + randomColor4;
  }

  setGradient();
};

inputColor1.addEventListener('input', setGradient);
inputColor2.addEventListener('input', setGradient);

window.addEventListener('load', setGradient);
window.addEventListener('keydown', changeGradientDirection);

button.addEventListener('click', generateRandomGradient);

topArrow.addEventListener('click', changeGradientDirection);
leftArrow.addEventListener('click', changeGradientDirection);
bottomArrow.addEventListener('click', changeGradientDirection);
rightArrow.addEventListener('click', changeGradientDirection);

inputColorQuantity2.addEventListener('click', () => {
  labelInputColor3.classList.add('container-disable');
  labelInputColor4.classList.add('container-disable');
  setGradient();
});

inputColorQuantity3.addEventListener('click', () => {
  labelInputColor3.classList.remove('container-disable');
  labelInputColor4.classList.add('container-disable');
  setGradient();
});

inputColorQuantity4.addEventListener('click', () => {
  labelInputColor3.classList.remove('container-disable');
  labelInputColor4.classList.remove('container-disable');
  setGradient();
});

selectAngle.addEventListener('change', changeGradientDirection);
