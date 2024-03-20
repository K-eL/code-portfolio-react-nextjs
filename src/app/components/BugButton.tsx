'use client';
import { useState } from 'react';

export function BugButton() {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return (
    <button
      className='rounded bg-red-500 px-4 py-2 font-bold text-white'
      onClick={() => setClicked(true)}>
      Trigger Error
    </button>
  );
}
