
let gridNumber = 32;
let selectedColor = null;
let mainContainer = document.querySelector('.container');
let divs = document.querySelectorAll('.divGrid');
const clearGrid = document.querySelector('.resetBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const blueBtn = document.querySelector('.blueBtn');
const shadingBtn = document.querySelector('.shadingBtn');
const slider = document.querySelector('#slider');
const value = document.querySelector('.sliderValue');

//shading button click event
shadingBtn.addEventListener('click', () =>
{
  selectedColor = 'white';
  buttonStyles();
});

//blue button click event
blueBtn.addEventListener('click', () =>
{
  selectedColor = 'blue';
  buttonStyles();
});

//rainbow button click event
rainbowBtn.addEventListener('click', () =>
{
  selectedColor = 'random';
  buttonStyles();
});


//reset the grid to white background color
clearGrid.addEventListener('click', ()=>
{
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'rgba(255, 255, 255, 255)';
  });
});

//dynamical creating of the grid via slider input
slider.addEventListener('input', function()
{
  let sliderValue = document.querySelector('#slider').value;
  //the slider value gets displayd in the P element under the slider
  value.textContent = sliderValue;
  gridNumber = sliderValue;
  removeAllChildNodes(mainContainer);
  for (let i = 0; i < gridNumber * gridNumber; i++) 
  {
    let div = document.createElement('div');
    div.classList.add('divGrid');
    //here the slider value is used as value for grid columns and dows
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);`);
    mainContainer.appendChild(div);
  };
  buttonStyles();
});

//the loop for creating a set nuber of divs
for (let i = 0; i < gridNumber * gridNumber; i++) 
{
  let div = document.createElement('div');
  div.classList.add('divGrid');
  mainContainer.appendChild(div); 
};

//random color generator
function randomColor()
{
     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     return color;
};

//random color divs on mouseenter
function rainbowColor()
{
document.querySelectorAll('.divGrid').forEach(divGrid => {
  divGrid.addEventListener('mouseenter', () => {
    divGrid.style.backgroundColor = randomColor();
  });
});
};

//random color divs on mouseenter
function blueColor()
{
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseenter', () => {
      divGrid.style.backgroundColor = 'blue';
    });
  });
};

//reset grid to white
function resetToWhite()
{
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'rgba(255, 255, 255, 255)';
  });
};

//run the function with a button click, check which button it is and add the style
function buttonStyles(){
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseenter', () => {
      if(selectedColor){
        if(selectedColor === 'white'){
          let color = window.getComputedStyle(divGrid).backgroundColor;
      //shading
      if(color.length == 18){
        let r = (color.slice(4,7) * 0.9).toFixed(0);
        let g = (color.slice(9,12) * 0.9).toFixed(0);
        let b = (color.slice(14,17) * 0.9).toFixed(0);
        let newShade = `rgba(${r},${g},${b},255)`;
        divGrid.style.backgroundColor = newShade;
        console.log(newShade);
      }
      else if(color.length == 15){
        let r = (color.slice(4,6) * 0.7).toFixed(0);
        let g = (color.slice(8,10) * 0.7).toFixed(0);
        let b = (color.slice(12,14) * 0.7).toFixed(0);
        let newShade = `rgba(${r},${g},${b},255)`;
        divGrid.style.backgroundColor = newShade;
      }
      else if(color.length == 12){
        let r = (color.slice(4,5) * 0.5).toFixed(0);
        let g = (color.slice(7,8) * 0.5).toFixed(0);
        let b = (color.slice(10,11) * 0.5).toFixed(0);
        let newShade = `rgba(${r},${g},${b},255)`;
        divGrid.style.backgroundColor = newShade;
      }
      }
      else if (selectedColor === 'blue'){
        divGrid.style.backgroundColor = 'blue';
      }
      else{
        divGrid.style.backgroundColor = randomColor();
      }
      }
  });
});

}

function removeAllChildNodes(parent)
{
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
};

