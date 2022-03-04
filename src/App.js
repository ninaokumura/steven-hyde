import { useState } from 'react';
import './App.css';
import Card from './components/Card';
// import bomb from './images/img--bomb.svg';
import questionMark from './images/question-mark.svg';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className='flex flex-col justify-center item-center min-h-screen'>
      <header className='grid place-items-center p-12'>
        <h1 className='font-sans text-4xl'>Jokenpo</h1>
      </header>
      <main className='border flex-1 grid place-items-center'>
        <Card playerName='Computer' src={questionMark} score={score} />
      </main>
    </div>
  );
}

export default App;
