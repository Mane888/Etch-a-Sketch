//the loop  for creating a set nuber of divs
let gridNumber = 16*16;
let mainContainer = document.querySelector('.container');

for (let i = 0; i < gridNumber; i++) {
  let div = document.createElement('div');
  div.classList.add('divGrid');
  mainContainer.appendChild(div);
  
}