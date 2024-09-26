* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #fff;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.container {
  text-align: center;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.tile {
  width: 60px;
  height: 60px;
  border: 2px solid #555;
  text-transform: uppercase;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
}

.keyboard {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px;
}

.key {
  padding: 10px;
  background-color: #555;
  border: none;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}

.key.correct {
  background-color: #6aaa64;
}

.key.wrong-location {
  background-color: #c9b458;
}

.key.wrong {
  background-color: #787c7e;
}

@media (max-width: 600px) {
  .tile {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .key {
    font-size: 1rem;
    padding: 8px;
  }
}
