import { Header } from '@app/components/Header';

export default function NotFound() {
  return (
    <div className='flex h-screen justify-center align-middle'>
      <Header />
      <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
          Sorry, this movie is not available.
        </h1>
      </main>
    </div>
  );
}
