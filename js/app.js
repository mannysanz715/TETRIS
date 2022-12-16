//? ----------------------------------------- Constants --------------------------------------------







//? ----------------------------------------- Variables --------------------------------------------
let board = []
let squareDiv


//? ----------------------------------------- Cached Elements --------------------------------------------


const boardContainer = document.querySelector('.board-container')



//? ----------------------------------------- Event Listeners --------------------------------------------







//? ----------------------------------------- Functions --------------------------------------------

init()


function init(){
  board = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
  createBoard()
  render()
}


function render(){
  updateBoard()
}

function createBoard(){
  board.forEach((arr, idx) =>{
    let arrIdx = idx
    arr.forEach((el, idx) =>{
      squareDiv = document.createElement('div')
      boardContainer.appendChild(squareDiv).setAttribute('id', `row:${arrIdx}`)
      squareDiv.setAttribute('class', `column:${idx}`)
    })
  })

}

function updateBoard(){

}

function pickRandomBlock(){

}

function changeOrientation(){

}

function checkForFullLine(){

}

function checkForLoss(){

}

function moveBlockHorizontal(){

}

function moveBlockVertical(){

}