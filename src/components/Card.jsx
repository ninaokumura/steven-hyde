import React from 'react';

export default function Card(props) {
  return (
    <div className='shadow-2xl p-8 w-[18rem] m-auto'>
      <div className='grid place-items-center gap-4'>
        <span className='text-2xl'>{props.playerName}</span>
        <div className='bg-gray-300 rounded-full'>
          <img className='w-[16rem]' src={props.src} alt='options' />
        </div>
        <span>Score: {props.score}</span>
      </div>
    </div>
  );
}
