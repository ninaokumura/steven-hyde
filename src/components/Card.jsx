import React from 'react';

export default function Card(props) {
  return (
    <div className='shadow-2xl py-8 w-[150px] sm:w-[250px]  m-auto'>
      <div className='grid text-xs place-items-center  sm:text-xl gap-4'>
        <span>{props.playerName}</span>
        <div className='bg-gray-300 rounded-full w-[80px] sm:w-[150px]'>
          <img src={props.src} alt='options' />
        </div>
        <span>Score: {props.score}</span>
      </div>
    </div>
  );
}
