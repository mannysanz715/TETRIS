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
  console.log(boardSquares[5])
  loadBlock()
  console.log(board)
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

  board.forEach(arr =>{
    arr.forEach(value =>{
      if(value != 0){

      }
    })
  })
}

function pickRandomBlock(){
  let randomIdx = Math.floor(Math.random() * 7)
  currentBlock = blocks[randomIdx]
}

function loadBlock(){
  pickRandomBlock()
  console.log(currentBlock.startingPosition)
  if(!loss){
      for(let arr in board){
        console.log(arr)
      }






    // currentBlock.startingPosition.forEach((arr, arrIdx) => {
      // arr.forEach((value, idx) =>{
      //   if(value != 0 && board[arrIdx][idx] === 0){
      //     if((board[arrIdx][idx] && board[arrIdx + 1][idx]) !== 0 ){
      //       return 
      //     }else board[arrIdx][idx] = value
      //   }
      // })
    // })
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