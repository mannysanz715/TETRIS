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
}

function createBoard(){
  board.forEach((arr, idx) =>{
    let arrIdx = idx
    arr.forEach((el, idx) =>{
      squareDiv = document.createElement('div')
      boardContainer.appendChild(squareDiv).setAttribute('id', `row${arrIdx}column${idx}`)
      squareDiv.setAttribute('class', `board-square`)
      boardSquares.push(squareDiv)
    })
  })
}

function updateBoard(){

  // board.forEach(arr =>{
  //   arr.forEach(value =>{
  //     if(value != 0){

  //     }
  //   })
  // })
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
        if(value === 0 && currentBlock.startingPosition[i][idx] !== 0){
          board[i][idx] = currentBlock.startingPosition[i][idx]
        }
      })
      console.log(board)
    }
  }
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