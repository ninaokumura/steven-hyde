import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
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
  message: '...',
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
  const [message, setMessage] = useState('...');

  function resetGame() {
    setPlayerScore(initialState.playerScore);
    setComputerScore(initialState.computerScore);
    setComputerOption(initialState.computerOption);
    setPlayerOption(initialState.playerOption);
    setMessage(initialState.message);
    return;
  }

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
      <header className='grid text-center p-6 gap-4'>
        <h1 className='font-sans text-xl sm:text-4xl'>Steven Hyde's Game</h1>
        <span className='text-sm sm:text-base'>
          Cockroach vs Foot vs Nuclear Bomb
        </span>
      </header>
      <main className='border flex-1 grid place-items-center'>
        <div className='py-4 text-lg'>{message}</div>
        <div className='flex gap-6 sm:gap-12 py-2'>
          {playerCards.map(player => (
            <Card
              key={player.playerName}
              playerName={player.playerName}
              src={player.src}
              score={player.score}
            />
          ))}
        </div>

        <div className='flex sm:gap-12 '>
          {options.map(option => (
            <button
              className='hover:opacity-80 transition-opacity'
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
                setMessage('It is a draw!');
              }}
            >
              <img
                className='w-14 sm:w-20 bg-gray-300 rounded-full m-2'
                src={option.imageSrc}
                alt={option.name}
              />
            </button>
          ))}
        </div>
        <div className='py-4'>
          <button
            className='bg-gray-300 sm:px-8 px-5 py-3 rounded-xl text-[10px] sm:text-xs hover:text-gray-300 hover:bg-black'
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      </main>

      <footer className='grid place-items-center w-full p-6'>
        <span className='text-[10px] flex gap-2'>
          Made with {<FaHeart className='text-sm' />} in New Zealand
        </span>
      </footer>
    </div>
  );
}

export default App;
