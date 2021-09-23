
let gridNumber = 16*16;
let mainContainer = document.querySelector('.container');
let divs = document.querySelectorAll('.divGrid');
const clearGrid = document.querySelector('.resetBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');
const blackBtn = document.querySelector('.blackBtn');

blackBtn.addEventListener('click', blackColor);

//calling the rainbow color function on button click event
rainbowBtn.addEventListener('click', rainbowColor );

//reset the grind to white background color
clearGrid.addEventListener('click', ()=>{
  document.querySelectorAll('.divGrid').forEach(divGrid => {
    divGrid.style.backgroundColor = 'white';
  });
});


//the loop for creating a set nuber of divs
for (let i = 0; i < gridNumber; i++) {
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

