    const container = document.querySelector('#container');

   for(let i=0; i < 16; i++) {
       container.appendChild(document.createElement('div'));
   }

   const content = container.querySelectorAll('div');

   content.forEach((div) => {
   div.setAttribute('class', 'gridSquares');
   div.addEventListener('mousemove', function colorDivGrid() {
       div.setAttribute('class', 'color');
   } )
   }
);