function createGrid() {
   const container = document.querySelector('#container');
   let x = 16;
   let y = Math.sqrt(x);
   let z = Math.round(y * 1) / 1;
   container.style.cssText = 'grid-template-rows: repeat(' + z + ', 1fr); grid-template-columns: repeat(' + z + ', 1fr)';

   for(let i=0; i < x; i++) {
       container.appendChild(document.createElement('div'));
   }

   const content = container.querySelectorAll('div');

   content.forEach((div) => {
   div.setAttribute('class', 'gridSquares');
   div.addEventListener('mousemove', function defaultColorDivGrid() {
       div.setAttribute('class', 'color gridSquares');
                }
            )
        }
    )
};
function createNewGrid() {
    const container = document.querySelector('#container');

    let input = arguments[0];
    let y = Math.sqrt(input);
    let z = Math.round(y * 1) / 1;
    container.style.cssText = 'grid-template-rows: repeat(' + z + ', 1fr); grid-template-columns: repeat(' + z + ', 1fr)';
    
    for(let i=0; i < input; i++) {
        container.appendChild(document.createElement('div'));
    }
 
    const content = container.querySelectorAll('div');
 
    content.forEach((div) => {
    div.setAttribute('class', 'gridSquares');
    div.addEventListener('mousemove', function colorDivGrid() {
        div.setAttribute('class', 'color gridSquares');
                 }
             )
         }
     )
 };
function clearButton() {
    const body = document.querySelector('#body');

    const createButton = document.createElement('button');
    body.appendChild(createButton);
    createButton.classList.add('buttonStyles');
    createButton.setAttribute('id', 'clearButton');
    createButton.setAttribute('onClick', 'removeClass()')
    createButton.textContent = 'Clear';
};
function newGridButton() {
    const body = document.querySelector('#body');

    const createButton = document.createElement('button');
    body.appendChild(createButton);
    createButton.classList.add('buttonStyles');
    createButton.setAttribute('id', 'newGridButton');
    createButton.setAttribute('onClick', 'promptChoice(); removeElements(); createNewGrid(input);')
    createButton.textContent = 'New Grid';
};
function removeClass() {
    const content = container.querySelectorAll('div');

    content.forEach((div) => {
    div.classList.remove('color');
    div.style.backgroundColor = null;
        }
    )
};
function removeElements() {
    const container = document.querySelector('#container');

    const content = container.querySelectorAll('div');

    content.forEach((div) => {
        div.remove();
        }
    )
};
function promptChoice() {
    input = prompt("Enter New Grid Size\n e.g. default size is 16x16" , "16, 36, 64, 100");

    arrayList = [16, 36, 64, 100]

    if (arrayList.includes(Number(input))) {
        return input;
    } else
    alert("Not a valid Choice. Try again.")
    promptChoice();
    
};
function randomNum(min, max) {
    x1 = Math.random() * (max - min) + min;
    x = Math.round(x1 * 1) / 1;
    y1 = Math.random() * (max - min) + min;
    y = Math.round(y1 * 1) / 1;
    z1 = Math.random() * (max - min) + min;
    z = Math.round(z1 * 1) / 1;
    return x, y, z;
};
function colorRGB() {
    const container = document.querySelector('#container');
    const content = container.querySelectorAll('div');

   content.forEach((div) => {
   div.setAttribute('class', 'gridSquares');
   div.addEventListener('mousemove', function colorDivGridRGB() {
       randomNum(1, 255); // returns random value for x y z
       div.style.cssText = 'background-color: rgb('+z+','+y+',155)'; // can add Z with --> '+z+'
                } 
            )
        }
   )
};
function rgbButton() {
    const body = document.querySelector('#body');

    const createButton = document.createElement('button');
    body.appendChild(createButton);
    createButton.classList.add('buttonStyles');
    createButton.setAttribute('id', 'rgbButton');
    createButton.setAttribute('onClick', 'colorRGB()')
    createButton.textContent = 'RGB';
};
function addRules() {
    const body = document.querySelector('#body');

    const createPara = document.createElement('p');
    let newLine = "\r\n"
    body.appendChild(createPara);
    createPara.classList.add('buttonStyles');
    createPara.setAttribute('id', 'rules');
    createPara.textContent = 'Welcome to Etch-a-Sketch!' + newLine + 'Hover over grid to color.' + newLine + 'Click "RGB" for random colors.' + newLine + 'Click "New Grid" for different sizes.';
};
addRules();
clearButton();
rgbButton();
newGridButton();
createGrid();



