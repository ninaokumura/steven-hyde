import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import questionMark from './images/question-mark.svg';
import bomb from './images/img--bomb.svg';
import cockroach from './images/img--cockroach.svg';
import foot from './images/img--foot.svg';

const initialState = {
  playerScore: 0,
  playerOption: '',
  computerScore: 0,
  computerOption: '',
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

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerOption, setPlayerOption] = useState('questionMark');
  const [computerOption, setComputerOption] = useState('questionMark');

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
      <header className='grid place-items-center p-12'>
        <h1 className='font-sans text-4xl'>Jokenpo</h1>
      </header>
      <main className='border flex-1 grid place-items-center'>
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
      </main>
    </div>
  );
}

export default App;
