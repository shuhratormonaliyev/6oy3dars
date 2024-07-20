import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Progress Bar</h1>
      <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      <button onClick={increaseProgress} style={styles.button}>Increase</button>
      <button onClick={decreaseProgress} style={styles.button}>Decrease</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  progressBar: {
    height: '20px',
    background: '#4caf50',
    margin: '20px 0'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default ProgressBar;
