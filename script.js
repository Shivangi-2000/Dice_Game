'use strict';
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnName = document.querySelector('.btn--name');
let btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');
let current0El = document.querySelector('#current--0');
let current1El = document.getElementById('current--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let btnDone = document.querySelector('.btn--done');
let player0Name = document.getElementById('name--0');
let player1Name = document.getElementById('name--1');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to the active players's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if score is greater than 20 than player will win the game
    if (scores[activePlayer] >= 100) {
      playing = false;

      document.getElementById(`name--${activePlayer}`).textContent += ' 🥇';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.src = 'img/trophy.png';
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

// Reset the game
btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  player0Name.textContent = 'Player 1';
  player1Name.textContent = 'player 2';
});

btnName.addEventListener('click', function () {
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
});
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  //overlay.classList.add('hidden');
});
btnDone.addEventListener('click', function () {
  player0Name.textContent = document.querySelector('.player-name-0').value;
  player1Name.textContent = document.querySelector('.player-name-1').value;
  document.querySelector('.player-name-0').value = '';
  document.querySelector('.player-name-1').value = '';
  modal.classList.add('hidden');
});
