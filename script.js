const targetWord = 'hello'; // You can randomize this word later or use a dictionary
let currentGuess = '';
let rowIndex = 0;
const maxAttempts = 6;

// Initialize the game board
const gameBoard = document.getElementById('game-board');
for (let i = 0; i < maxAttempts * targetWord.length; i++) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  gameBoard.appendChild(tile);
}

// Create the keyboard
const keyboardLayout = 'qwertyuiopasdfghjklzxcvbnm';
const keyboard = document.getElementById('keyboard');
keyboardLayout.split('').forEach(letter => {
  const key = document.createElement('button');
  key.className = 'key';
  key.textContent = letter;
  key.onclick = () => handleInput(letter);
  keyboard.appendChild(key);
});

// Add enter and delete keys
const enterKey = document.createElement('button');
enterKey.className = 'key';
enterKey.textContent = 'Enter';
enterKey.onclick = submitGuess;
keyboard.appendChild(enterKey);

const deleteKey = document.createElement('button');
deleteKey.className = 'key';
deleteKey.textContent = 'Del';
deleteKey.onclick = deleteLetter;
keyboard.appendChild(deleteKey);

function handleInput(letter) {
  if (currentGuess.length < targetWord.length) {
    currentGuess += letter;
    updateBoard();
  }
}

function deleteLetter() {
  currentGuess = currentGuess.slice(0, -1);
  updateBoard();
}

function updateBoard() {
  const tiles = document.querySelectorAll('.tile');
  const startIndex = rowIndex * targetWord.length;
  for (let i = 0; i < targetWord.length; i++) {
    tiles[startIndex + i].textContent = currentGuess[i] || '';
  }
}

function submitGuess() {
  if (currentGuess.length === targetWord.length) {
    const result = checkGuess();
    if (result) {
      alert('Congratulations, you won!');
      return;
    }
    rowIndex++;
    currentGuess = '';
    if (rowIndex === maxAttempts) {
      alert(`Game over! The word was ${targetWord}.`);
    }
  }
}

function checkGuess() {
  const tiles = document.querySelectorAll('.tile');
  const startIndex = rowIndex * targetWord.length;
  let correctCount = 0;
  
  for (let i = 0; i < targetWord.length; i++) {
    const letter = currentGuess[i];
    const tile = tiles[startIndex + i];
    if (letter === targetWord[i]) {
      tile.style.backgroundColor = '#6aaa64'; // Correct letter and position
      correctCount++;
    } else if (targetWord.includes(letter)) {
      tile.style.backgroundColor = '#c9b458'; // Correct letter, wrong position
    } else {
      tile.style.backgroundColor = '#787c7e'; // Wrong letter
    }
  }
  
  return correctCount === targetWord.length;
}
