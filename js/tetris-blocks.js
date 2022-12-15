

class Block {
  constructor(name, orientation, color){
    this.name = name
    this.orientation = orientation
    this.color = color
  }
}


let square = new Block('square', [1,2,1],'red')

console.log(square)