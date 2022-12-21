//? ----------------------------------------- Imports --------------------------------------------
import { blocks } from "./tetris-blocks.js"



//? ----------------------------------------- Constants --------------------------------------------


const tetrisClassic = new Audio("assets/TetrisMusic/tetrisClassical.mp3")



const boardSquares = []

//? ----------------------------------------- Variables --------------------------------------------
let board = []
let squareDiv
let currentBlock
let loss = false

//? ----------------------------------------- Cached Elements --------------------------------------------


const boardContainer = document.querySelector('.board-container')


//? ----------------------------------------- Event Listeners --------------------------------------------

boardContainer.addEventListener('click', evt =>{
  console.log('click')
  tetrisClassic.volume = 1
  tetrisClassic.loop = true 
  tetrisClassic.play()
})





//? ----------------------------------------- Functions --------------------------------------------

init()


function init(){
  board = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]
  createBoard()
  render()
  loadBlock()
}


function render(){
  updateBoard()
  checkForFullLine()
}

function createBoard(){
  board.forEach((arr, idx) =>{
    let arrIdx = idx
    arr.forEach((el, idx) =>{
      squareDiv = document.createElement('div')
      boardContainer.appendChild(squareDiv).setAttribute('id', `${arrIdx}-${idx}`)
      squareDiv.setAttribute('class', `board-square`)
      boardSquares.push(squareDiv)
    })
  })
}

function updateBoard(){
  let coordinates = []
  boardSquares.forEach(square =>{
    let pair = square.id.split('-')
    coordinates.push(pair)
  })
  board.forEach((arr, row) =>{
    arr.forEach((value, column)=>{
      if(value !== 0){
        const boardSquare = document.getElementById(`${row}-${column}`)
        boardSquare.style.backgroundColor = 'blue'
      }
    })
  })
  console.log(boardSquares)
}

function pickRandomBlock(){
  let randomIdx = Math.floor(Math.random() * 7)
  currentBlock = blocks[randomIdx]
}

function loadBlock(){
  pickRandomBlock()
  if(!loss){
    for(let i = 0; i < 3; i++){
      board[i].forEach((value, idx) => {
        ((value === 0) && (currentBlock.startingPosition[i])) ?
          board[i][idx] = currentBlock.startingPosition[i][idx] : ''
      }
      )
    }
  }
  render()
}

function changeOrientation(){

}

function checkForFullLine(){

}



function moveBlockHorizontal(){

}

function moveBlockVertical(){
  if(currentBlock.startingPosition + 1 === 0){
  render()
  }
}