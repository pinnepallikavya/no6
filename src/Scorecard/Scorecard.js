// Scorecard.jsx
import React from 'react';

const Scorecard = ({ score, onPlayAgain }) => (
  <div className="scorecard-container">
    <img src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png" alt="score card" />
    <div className="score-info">
      <img src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" alt="trophy" />
      <p>Your Score</p>
      <p>{score}</p>
    </div>
    <button type="button" className="play-again" onClick={onPlayAgain}>
      <img src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png" alt="reset" />
      Play Again
    </button>
  </div>
);

export default Scorecard;
