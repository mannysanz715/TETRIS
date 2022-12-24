// ? ---------------------------------------- Constants ------------------------------------

const boardContainer = document.querySelector('.board-container')



// ? ---------------------------------------- Variables ------------------------------------

let boardArr = []

// ? ---------------------------------------- Functions ------------------------------------
createBoard()
createArr()

function createBoard () {
  for(let i = 0; i < 20; i++){
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    rowDiv.classList.add(i)
    boardContainer.appendChild(rowDiv)
    for(let j = 0; j < 10; j++){
      let columnDiv = document.createElement('div')
      columnDiv.classList.add('column')
      columnDiv.classList.add(j)
      rowDiv.appendChild(columnDiv)
    }
  }
}

function createArr (){
  for(let i = 0; i < 20; i++){
    boardArr.push([null,null,null,null,null,null,null,null,null,null])
  }
}

console.log(boardContainer)
console.log(boardArr)

