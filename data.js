function createGrid() {
   const container = document.querySelector('#container');
   let x = 16*16; // I am now aware getting sqrt of x and rounding was pretty useless. 
   let y = Math.sqrt(x); // when I could just have the user choose a size per side.
   let z = Math.round(y * 1) / 1; // just going to leave it as is for now. As I learned how to use these two functions. 
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
function defaultColor() {
    const content = container.querySelectorAll('div');

    content.forEach((div) => {
        div.setAttribute('class', 'gridSquares');
        div.addEventListener('mousemove', function defaultColorDivGrid() {
            div.setAttribute('class', 'color gridSquares');
                     }
                 )
             }
         )

}
function createNewGrid() {
    const container = document.querySelector('#container');

    let input1 = input*input; // changed arguments[0] per suggestion since I am already passing input into the function when I call it. no need to retrieve arguments[0] 
    let y = Math.sqrt(input1);// again leaving as is since I learned this was not necessary to use sqrt / round
    let z = Math.round(y * 1) / 1;
    container.style.cssText = 'grid-template-rows: repeat(' + z + ', 1fr); grid-template-columns: repeat(' + z + ', 1fr)';
    
    for(let i=0; i < input1; i++) {
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
    createButton.setAttribute('onClick', 'removeClass(); cloneNodeReset(); defaultColor();')
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
    input = prompt("Enter New Grid Size\n e.g. default size is 16x16" , "Choose between 1-50");

    arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

    if (arrayList.includes(Number(input))) {
        return input;
    } else
    alert("Not a valid Choice. Try again.")
    promptChoice();
    
};
function randomNum(min, max) {
    const x1 = Math.random() * (max - min) + min;
    const x = Math.round(x1 * 1) / 1;
    const y1 = Math.random() * (max - min) + min;
    const y = Math.round(y1 * 1) / 1;
    const z1 = Math.random() * (max - min) + min;
    const z = Math.round(z1 * 1) / 1

    return [x, y, z];
};
function colorRGB() {
    const container = document.querySelector('#container');
    const content = container.querySelectorAll('div');

   content.forEach((div) => {
   div.setAttribute('class', 'gridSquares');
   div.addEventListener('mousemove', function colorDivGridRGB() {
       numbers = randomNum(1, 255); // returns random value for x y z
    
       div.style.cssText = 'background-color: rgb('+numbers[0]+','+numbers[1]+','+numbers[2]+')';
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
function cloneNodeReset() {
    // This function is just to help the clear button reset to the default black color.
    //cloning and replacing all the divs to remove eventListeners.
    const container = document.querySelector('#container');

    x = container.cloneNode(true);

    container.remove();

    const body = document.querySelector('#body');

    body.appendChild(x);
}
addRules();
clearButton();
rgbButton();
newGridButton();
createGrid();



