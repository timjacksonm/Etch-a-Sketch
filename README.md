# Etch-a-Sketch

## Goals:
- [✔️] Create a webpage with 16x16 grid of sqaure divs
- [✔️] Create html elements manipulating the DOM rather than typing in the html document.
- [✔️] Set up a "hover" effect so the grid divs change color when your mouse passes over them.
- [✔️] Add a clear button to the top of the screen that clears the canvas.
- [✔️] Add a button when clicked, the user can chose how many sqaures per side to make a new grid.

**Extra Credit**
- [✔️] give the user an option for a random RGB value rather than just white to black.

- [ ]  add an option so each pass of a grid div adds 10% black so after 10 passes the sqaure is completely black. (shade option)

**Changelog:**

01/18/2020

-added 16x16 grid to center of page (*actually was 16 sqaures total. mis understood assighment goal.*)

-added an event listener when you hover over any of the div elements it adds class 'color' to the div. Color is currently set to background-color: blue for testing.

-added reset button and functionality.

-changed Reset button to clear. Added new button "New grid" with functionality.

-added prompt that only allows specific listed values to be entered.

01/20/2021

-adjusted grid layout.

-added rules text to bottom of page

-updated grid size choices correctly. Can now choose between 1-50 sqaures per side.

-added some comments to data.js to explain functions.

-fixed randomNum function, RGB button is now atually random. 

-added a new function that clones all the divs and replaces them. This function is used with the clear button. Meant to remove eventListeners so the color defaults back to black.
