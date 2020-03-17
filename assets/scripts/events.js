'use strict'
const ui = require('./ui')
const api = require('./api')
const store =require('./store.js')
const getFormFields = require('../../lib/get-form-fields')
//control variables

// check variable which shows if the game is over or not, used all functions of the game logic
let gameCheck = true
// counter for the decide if it X or O with % 2
let counter = 1
// user's sign for the game
let letter = 'x'
// extra variable for the even-steven bug of the check funtion
let es = 0
//check the board for winner
const check = function (user) {
  for (let i = 0; i < 8; i++) {
    let winnerCheck = store.winner[i]
    let p1 = store.board[winnerCheck[0]]
    let p2 = store.board[winnerCheck[1]]
    let p3 = store.board[winnerCheck[2]]
    if ((p1+p2+p3) === 'XXX') {
  $("#result").text('X Wins!')
  $('#result').addClass('X')
  gameCheck = false
  es = 1
  }
    if ((p1+p2+p3) === 'OOO') {
  $("#result").text('O Wins!')
  $('#result').addClass('O')
  gameCheck = false
  es = 2;
  }
}  if (counter === 10 && es === 0) {
  $("#result").text('Even-Steven!')
  gameCheck= false
    }

}

//restart the game
const restart = function (){
  event.preventDefault()
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
    $('#'+i).removeClass('X')
    $('#'+i).removeClass('O')
  }
es = 0
counter = 1
gameCheck = true
//store.validation = true
store.board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
<<<<<<< HEAD
$('#result').text('Tic Tac Toe 2020 ®')
=======
$('#result').removeClass('X')
$('#result').removeClass('O')
>>>>>>> final
if (store.validation === true) {
$('#again').text('Restart The Game')
$('#stats').text('Stats')
$('#change-password').addClass('hide')
$('#p').text('')
$('#change-pass').text('Change Password!')
$('#result').text('© Tic Tac Toe 2020 ®')}
}

//game logic. while user play, control the board and actions.
const onPlay = function (event) {
  let box = $(event.target)
  //store.position = box[0].id
  if (box.text() !== ''  && gameCheck === true && store.validation === true) {
    $('#again').text('Please click an empty space on the game board! / Restart The Game')
  }

<<<<<<< HEAD
if(box.text() === '' && box.text() !=='O' && (counter % 2 === 1) && gameCheck === 'play' && store.validation === true) {
  box.text('X')
=======
  if (box.text() === '' && box.text() !=='O' && (counter % 2 === 1) && gameCheck === true && store.validation === true) {
  letter = 'X'
  box.text(letter)
  $(box).addClass('X')
>>>>>>> final
  counter += 1
  store.board[box.attr("id")] = letter
  $('#again').text("O's Turn / Restart The Game")
  // store.player_x[box.attr("id")] = 'X'
  check('X')
<<<<<<< HEAD
} else if (box.text() === '' && box.text() !=='X' && (counter % 2 === 0) && gameCheck === 'play' && store.validation === true) {
box.text('O')
=======
} else if (box.text() === '' && box.text() !=='X' && (counter % 2 === 0) && gameCheck === true && store.validation === true) {
letter = 'O'
box.text(letter)
$(box).addClass('O')
>>>>>>> final
counter += 1
store.board[box.attr("id")] = letter
$('#again').text("X's Turn / Restart The Game")
//store.player_o[box.attr("id")] = 'O'
check('O')
}
<<<<<<< HEAD
if (store.validation!==true) {
=======
if (store.validation !== true) {
>>>>>>> final
  $("#again").text('Please sign-in to play the game!')
}
else if (gameCheck === false){
      $("#again").text('Game is Over / Play Again?')
}
api.gameUpdate(event.target, letter, gameCheck)
  .then(ui.onGameUpdateSuccessfull)
  .catch(ui.onGameUpdatefailure)
}





module.exports = {
onPlay,
restart,
counter
}
