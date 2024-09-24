import './App.css';
import React, { useState } from 'react';

//possible choices
const choices = ['Rock', 'Paper', 'Scissors'];

//function to determine winner
const determineWinner = (userChoice, computerChoice)=>{
  if(userChoice === computerChoice){
    return 'Its a tie';
  }else 
    if((userChoice === 'Rock' && computerChoice === 'Scissors') ||
       (userChoice === 'Paper' && computerChoice === 'Rock') ||
       (userChoice === 'Scissors' && computerChoice === 'Paper')
      ){
        return 'You win!';
    }else{
        return 'Computer wins!'
    }
}

const App =()=> {

  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [winner, setWinner] = useState('');

  //handle user selection
  const handleUserSelection=(choice)=>{
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    const result = determineWinner(choice, randomChoice);
    setWinner(result);
  }
  return (
    <div className="App">
      <h1> PLAY ROCK PAPER SCISSORS WITH COMPUTER</h1>
      <div className="choices">
        <button onClick={() => handleUserSelection('Rock')}>Rock</button>
        <button onClick={() => handleUserSelection('Paper')}>Paper</button>
        <button onClick={() => handleUserSelection('Scissors')}>Scissors</button>
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <h2>{winner}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
