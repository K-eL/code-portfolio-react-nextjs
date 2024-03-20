import { Movies } from '../../@core/types/Movie';
import { MovieCard } from './MovieCard';

type MovieRowProps = {
  sectionTitle: string;
  movies: Movies;
};

export function MovieRow({ sectionTitle, movies }: MovieRowProps) {
  if (movies.length === 0) {
    return null;
  }
  return (
    <div className='flex-col space-y-2'>
      <div className='flex'>
        <h2 className='my-4 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
