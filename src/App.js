import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import questionMark from './images/question-mark.svg';
import bomb from './images/img--bomb.svg';
import cockroach from './images/img--cockroach.svg';
import foot from './images/img--foot.svg';

const initialState = {
  playerScore: 0,
  playerOption: 'questionMark',
  computerScore: 0,
  computerOption: 'questionMark',
};

const icons = {
  questionMark,
  cockroach,
  foot,
  bomb,
};

const options = [
  {
    name: 'cockroach',
    imageSrc: icons.cockroach,
    winsAgainst: 'bomb',
    losesAgainst: 'foot',
  },
  {
    name: 'foot',
    imageSrc: icons.foot,
    winsAgainst: 'cockroach',
    losesAgainst: 'bomb',
  },
  {
    name: 'bomb',
    imageSrc: icons.bomb,
    winsAgainst: 'foot',
    losesAgainst: 'cockroach',
  },
];

function getRandomOption() {
  const randomIndex = Math.ceil(Math.random() * options.length) - 1;
  const randomOption = options[randomIndex];
  return randomOption.name;
}

function App() {
  const [playerScore, setPlayerScore] = useState(initialState.playerScore);
  const [computerScore, setComputerScore] = useState(
    initialState.computerScore
  );
  const [playerOption, setPlayerOption] = useState(initialState.playerOption);
  const [computerOption, setComputerOption] = useState(
    initialState.computerOption
  );
  const [message, setMessage] = useState('');

  const playerCards = [
    {
      playerName: 'You',
      src: icons[playerOption],
      score: playerScore,
    },
    {
      playerName: 'Computer',
      src: icons[computerOption],
      score: computerScore,
    },
  ];

  return (
    <div className='flex flex-col justify-center item-center min-h-screen'>
      <header className='grid place-items-center p-6 gap-4'>
        <h1 className='font-sans text-4xl'>Jokenpo</h1>
        <span className=''>Cockroach vs Foot vs Nuclear Bomb</span>
      </header>
      <main className='border flex-1 grid place-items-center'>
        {message}

        <div className='flex gap-12'>
          {playerCards.map(player => (
            <Card
              key={player.playerName}
              playerName={player.playerName}
              src={player.src}
              score={player.score}
            />
          ))}
        </div>

        <div className='flex'>
          {options.map(option => (
            <button
              key={option.name}
              onClick={() => {
                const computerOption = getRandomOption();
                setPlayerOption(option.name);
                setComputerOption(computerOption);
                if (option.winsAgainst === computerOption) {
                  setPlayerScore(playerScore + 1);
                  setMessage('You won!');
                  return;
                }
                if (option.losesAgainst === computerOption) {
                  setComputerScore(computerScore + 1);
                  setMessage('Computer won!');
                  return;
                }
              }}
            >
              <img
                className='w-24 bg-gray-300 rounded-full m-2'
                src={option.imageSrc}
                alt={option.name}
              />
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
