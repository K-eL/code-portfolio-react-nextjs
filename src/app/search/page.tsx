import { Header } from '@app/components/Header';
import { MovieCard } from '@app/components/MovieCard';
import { searchMovies } from '@core/modules/movie/services/MovieService';
import { SearchResultsTitle } from './SearchResultsTitle';

interface ISearchParams {
  title?: string;
  genre?: string;
}

interface ISearchProps {
  searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams }: ISearchProps) {
  const { title, genre } = searchParams;

  const movies = await searchMovies(title, genre);

  if (movies.length === 0) {
    return (
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Header />
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
            <SearchResultsTitle title={title} genre={genre} />
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Header />
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16 '>
          <h1 className='mb-4 text-2xl font-bold'>
            <SearchResultsTitle title={title} genre={genre} />
          </h1>
          <div className='mr-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mr-16 lg:grid-cols-8 lg:gap-8'>
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
