
let gridNumber = 32;
let selectedColor = null;
let mainContainer = document.querySelector('.container');
let divs = document.querySelectorAll('.divGrid');
let style = document.querySelector('[data="thumb"]');
const clearGrid = document.querySelector('.resetBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const blueBtn = document.querySelector('.blueBtn');
const shadingBtn = document.querySelector('.shadingBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const slider = document.querySelector('#slider');
const value = document.querySelector('.sliderValue');
const gridSwitch = document.querySelector('#grid-switch');

gridOnOff();


//show/hide grid
function gridOnOff(){
gridSwitch.addEventListener('click', () => {
  let val = document.querySelector('#grid-switch').value;
  console.log(val);

  if(val === '1'){
    document.querySelectorAll('.divGrid').forEach(divGrid => {
      divGrid.classList.add('hideGrid');
        });
    document.querySelector('.grid-on-off').textContent = 'Grid OFF';
    gridSwitch.setAttribute('value', 2);
  }
  else if (val === '2'){
    document.querySelectorAll('.divGrid').forEach(divGrid => {
      divGrid.classList.remove('hideGrid');     
        });
    document.querySelector('.grid-on-off').textContent = 'Grid ON';
    gridSwitch.setAttribute('value', 1);
  };
});
};


//function to keep the selected grid visibility while using the grid slider
function gridOnOffSlider(){
  let val = document.querySelector('#grid-switch').value;
    if(val === '2'){
      document.querySelectorAll('.divGrid').forEach(divGrid => {
      divGrid.classList.add('hideGrid');
      });
    }
    else if (val === '1'){
      document.querySelectorAll('.divGrid').forEach(divGrid => {
      divGrid.classList.remove('hideGrid');     
      }); 
    };
};
  

//shading button click event
shadingBtn.addEventListener('click', () =>  {
  selectedColor = 'white';
  buttonStyles();
});


//blue button click event
blueBtn.addEventListener('click', () => {
  selectedColor = 'blue';
  buttonStyles();
});


//rainbow button click event
rainbowBtn.addEventListener('click', () =>  {
  selectedColor = 'random';
  buttonStyles();
});


//eraser button click event
eraserBtn.addEventListener('click', () => {
  selectedColor = 'eraser';
  buttonStyles();
});


//reset the grid to white background color
clearGrid.addEventListener('click', ()=>  {
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  });
});


//removing all divs before creating new ones with the slider
function removeAllChildNodes(parent)  {
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  };
};


//dynamical creating of the grid via slider input
slider.addEventListener('input', function() {
  let sliderValue = document.querySelector('#slider').value;
    //the slider value gets displayd in the P element under the slider
    value.textContent = `Grid size ${sliderValue}`;
      gridNumber = sliderValue;
  //removing divs before creating new ones to prevent overlaping
  removeAllChildNodes(mainContainer);
    for (let i = 0; i < gridNumber * gridNumber; i++) {
      let div = document.createElement('div');
        div.classList.add('divGrid');
          //here the slider value is used as value for grid columns and rows
          mainContainer.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);`);
            mainContainer.appendChild(div);
    };
  buttonStyles();
  gridOnOffSlider();
});


//the loop for creating a set nuber of divs
for (let i = 0; i < gridNumber * gridNumber; i++) {
  let div = document.createElement('div');
    div.classList.add('divGrid');
      mainContainer.appendChild(div); 
};


//random color generator
function randomColor()  {
  color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round  (Math.random()*255)+')';
    return color;
};


//random color divs on mouseenter
function rainbowColor() {
document.querySelectorAll('.divGrid').forEach(divGrid => {
  divGrid.addEventListener('mouseenter', () => {
    divGrid.style.backgroundColor = randomColor();
    });
  });
};


//random color divs on mouseenter
function blueColor()  {
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseenter', () => {
      divGrid.style.backgroundColor = 'blue';
    });
  });
};


//reset grid to white
function resetToWhite() {
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  });
};


//run the function with a button click, check which button it is and add the style
function buttonStyles(){
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseenter', () => {
      if(selectedColor){
        if(selectedColor === 'white')
        {
          //pick a color on mouseenter and add 10% black to it until it's all black
          let color = window.getComputedStyle(divGrid).backgroundColor;
          const [r,g,b] = color.slice(4,color.length - 1).split(',');
          rS = (r * 0.9).toFixed(1);
          gS = (g * 0.9).toFixed(1);
          bS = (b * 0.9).toFixed(1);
          let newShade = `rgba(${rS},${gS},${bS},1)`;
          divGrid.style.backgroundColor = newShade;
        }
        else if (selectedColor === 'blue')
        {
        divGrid.style.backgroundColor = 'blue';
        }
        else if (selectedColor === 'eraser')
        {
          let color = window.getComputedStyle(divGrid).backgroundColor;
          console.log(color);
          const [r,g,b] = color.slice(4,color.length - 1).split(',');
          rS = (parseInt(r) + 5 * 1.2);
          gS = (parseInt(g) + 5 * 1.2);
          bS = (parseInt(b) + 5 * 1.2);
          let newShade = `rgba(${rS},${gS},${bS},1)`;
          divGrid.style.backgroundColor = newShade;
          console.log(newShade);
        }
        else
        {
        divGrid.style.backgroundColor = randomColor();
        }
      }
    });
  });
};


function removeAllChildNodes(parent)  {
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  };
};


