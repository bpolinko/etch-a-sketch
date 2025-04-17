let answer = 0;

// Swap color by clicking on related button

let color = "black";
const container = document.querySelector("#container");
const black = document.querySelector("#black");
const red = document.querySelector("#red");
const orange = document.querySelector("#orange");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const purple = document.querySelector("#purple");
const pink = document.querySelector("#pink");
const white = document.querySelector("#white");

black.addEventListener("click" , swapColors);
red.addEventListener("click" , swapColors);
orange.addEventListener("click" , swapColors);
yellow.addEventListener("click" , swapColors);
green.addEventListener("click" , swapColors);
blue.addEventListener("click" , swapColors);
purple.addEventListener("click" , swapColors);
pink.addEventListener("click" , swapColors);
white.addEventListener("click" , eraser);

function swapColors() {
    color = this.id;
    console.log(this.id);
    document.body.style.cursor = "url(img/pencil.cur), auto"; 
}

function eraser() {
    color = this.id;
    console.log(this.id);
    document.body.style.cursor = "url(img/cursor.cur), auto";
}



// Button that when clicked asks for grid size and stores the answer in a variable. On click event, 
//  resets/deletes previous grid (div children of container). If answer is > 100, < 1, or not an integer,
// returns an error message. 

const btn = document.querySelector("button");
 btn.addEventListener("click", findGridSize);

 function findGridSize() {
    if (answer != 0) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
          }
    }
    answer = prompt("How many squares per side (100 max)?")
    if (answer > 0 && answer < 101) {
        makeGrid();
    }
    else if (answer < 1 || answer > 100 || !Number.isInteger(answer)) {
        alert("Please input a number betweeen 1 - 100");
    }
}

// Creates grid that is answer of prompt by answer of prompt in size ( aka 5 x 5, etc)
// Grid needs to always be in a square shape, and keep within predetermined space. 
// Start on mouseover event where it changes the background color of the square mousedover



function makeGrid() {
    for (let i = 0; i < (answer * answer); i++) {
        const gridSquare = document.createElement("div");
        const dim = 600 / answer;
        const dimension = dim + "px";
        gridSquare.style.height = dimension;
        gridSquare.style.width = dimension;
        gridSquare.classList = "square";
        container.appendChild(gridSquare);

        let toggle = false;

        container.addEventListener('click' , mouseoverStart)


        function mouseoverStart() {
        toggle = !toggle;
        gridSquare.addEventListener('mouseover', function() {
            if (toggle) {
        this.style.backgroundColor = color; 
        console.log(toggle);
            }
          else {
            console.log(toggle);
          }
          
    
    });
}
}
}





 



