import React, { useState } from 'react';

const GameNamePicker = () => {
  const games = ['Chess', 'Football', 'Basketball', 'Tennis', 'Badminton'];
  const [selectedGame, setSelectedGame] = useState('');

  const pickGame = () => {
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1>Game Name Picker</h1>
      <button onClick={pickGame} style={styles.button}>Pick Game</button>
      {selectedGame && <p>Selected Game: {selectedGame}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default GameNamePicker;
