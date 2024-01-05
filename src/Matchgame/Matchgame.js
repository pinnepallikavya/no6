// MatchGame.jsx
import React, { useState, useEffect } from 'react';
import Tab from './Tab';
import ThumbnailsList from './ThumbnailsList';
import Scorecard from './Scorecard';
import './MatchGame.css';

const MatchGame = ({ tabsList, imagesList }) => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [activeTab, setActiveTab] = useState('Fruits');
  const [imageToMatch, setImageToMatch] = useState(imagesList[0].imageUrl);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0 && !gameOver) {
        setTime((prevTime) => prevTime - 1);
      } else {
        setGameOver(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, gameOver]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleThumbnailClick = (clickedImageUrl) => {
    if (clickedImageUrl === imageToMatch) {
      setScore((prevScore) => prevScore + 1);
      setImageToMatch(imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl);
    } else {
      setGameOver(true);
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setTime(60);
    setImageToMatch(imagesList[0].imageUrl);
    setActiveTab('Fruits');
    setGameOver(false);
  };

  return (
    <div className="match-game-container">
      {!gameOver ? (
        <>
          <div className="game-header">
            <img src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png" alt="website logo" />
            <div className="timer-container">
              <img src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png" alt="timer" />
              <p>{time}s</p>
            </div>
          </div>
          <div className="game-body">
            <Tab tabsList={tabsList} activeTab={activeTab} onTabClick={handleTabClick} />
            <ThumbnailsList
              activeTab={activeTab}
              imagesList={imagesList}
              onThumbnailClick={handleThumbnailClick}
            />
          </div>
        </>
      ) : (
        <Scorecard score={score} onPlayAgain={handlePlayAgain} />
      )}
    </div>
  );
};

export default MatchGame;
