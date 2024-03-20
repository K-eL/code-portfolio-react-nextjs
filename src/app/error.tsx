'use client';
import React, { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log('logging error', error);
  }, [error]);
  return (
    <div className='flex h-screen items-center justify-center bg-black'>
      <div className='text-white'>
        <h1>Error</h1>
        <p>{error.message}</p>
        <button
          className='rounded bg-red-500 px-4 py-2 font-bold text-white'
          onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
