
let gridNumber = 32;
let mainContainer = document.querySelector('.container');
let divs = document.querySelectorAll('.divGrid');
const clearGrid = document.querySelector('.resetBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const blackBtn = document.querySelector('.blackBtn');
const shadingBtn = document.querySelector('.shadingBtn');
const slider = document.querySelector('#slider');
const value = document.querySelector('.sliderValue');

shadingBtn.addEventListener('click', blackShade );

//falling the black color function on button click event
blackBtn.addEventListener('click', blackColor);

//calling the rainbow color function on button click event
rainbowBtn.addEventListener('click', rainbowColor );

//reset the grind to white background color
clearGrid.addEventListener('click', ()=>{
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'white';
  });
});



slider.addEventListener('input', function(){
  let sliderValue = document.querySelector('#slider').value;
  value.textContent = sliderValue;
  gridNumber = sliderValue;
  removeAllChildNodes(mainContainer);
  for (let i = 0; i < gridNumber * gridNumber; i++) {
    let div = document.createElement('div');
    div.classList.add('divGrid');
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 1fr); grid-template-rows: repeat(${sliderValue}, 1fr);`);
    mainContainer.appendChild(div); 
  };
});

//the loop for creating a set nuber of divs
for (let i = 0; i < gridNumber * gridNumber; i++) {
  let div = document.createElement('div');
  div.classList.add('divGrid');
  mainContainer.appendChild(div); 
};


document.querySelectorAll('.divGrid').forEach(divGrid => {
  divGrid.addEventListener('mouseover', () => {
    divGrid.style.backgroundColor = 'black';
  });
});


//random color generator
function randomColor(){

     color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

     return color;
};

function rainbowColor(){
//random color divs on mouseover
document.querySelectorAll('.divGrid').forEach(divGrid => {
  divGrid.addEventListener('mouseover', () => {
    divGrid.style.backgroundColor = randomColor();
  });
});
};

function blackColor(){
  //random color divs on mouseover
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseover', () => {
      divGrid.style.backgroundColor = 'black';
    });
  });
};

function blackShade(){
  //random color divs on mouseover
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.addEventListener('mouseenter', () => {
      divGrid.style.backgroundColor = '' ;
    });
  });
};

/*const sliderValue = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    sliderValue.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});*/

/*
slider.addEventListener('input', function(){
  let sliderValue = document.querySelector('#slider').value;
  value.textContent = sliderValue;
  mainContainer.setAttribute('style', `grid-template-columns: repeat(${sliderValue}, 2fr); grid-template-rows: repeat(${sliderValue}, 2fr);`);

});
*/

function removeAllChildNodes(parent){
  while(parent.firstChild){
      parent.removeChild(parent.firstChild);
  }
}