//initialize the game board on page load
initBoard()

function initBoard(){
  let board = document.getElementById('clue-board')
  //generate 5 rows then place 6 boxes in each row-need a nested loop
  for(let i = 0; i < 5; i++){
    let row = document.createElement('div')
    let boxValue = 200 * (i + 1)//to increment each dollar amount by 200
    row.className = 'clue-row'

    //inner part of loop
    for (let j = 0; j < 6; j++){
      let box = document.createElement('div')
      box.className = 'clue-box'
      box.textContent = '$' + boxValue
      //box.appendChild(document.createTextNode(boxValue))
      //backwards compatible-for older versions
      box.addEventListener('click', getClue, false)
      //how to tell JS to next box inside of row. For each box we create, it will put box in it's parent row
      row.appendChild(box)
    }
    //need to attach rows to the gameboard. Need to next the boxes to the gameboard.
    board.appendChild(row)
  }
}
function getClue (){
  console.log('have a nice day')
}
 