function createGrid() {
   const container = document.querySelector('#container');
   let i = 0;
   let input = 16

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
function resetButton() {
    const body = document.querySelector('#body');

    const createButton = document.createElement('button');
    body.appendChild(createButton);
    createButton.classList.add('buttonStyles');
    createButton.setAttribute('id', 'resetButton');
    createButton.setAttribute('onClick', 'removeClass()')
    createButton.textContent = 'Reset';
};
function removeClass() {
    const content = container.querySelectorAll('div');

    content.forEach((div) => {
    div.classList.remove('color');
        }
    )
};

resetButton();
createGrid();



