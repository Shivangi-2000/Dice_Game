'use strict';
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceEl = document.querySelector('.dice');

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;

btnRoll.addEventListener('click', function () {
  //generating random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `img/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
  } else {
  }
});
