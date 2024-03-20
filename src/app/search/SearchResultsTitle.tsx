'use client';
import { useRouter } from 'next/navigation';

type SearchResultTitleInput = {
  title?: string;
  genre?: string;
};

export const SearchResultsTitle = ({
  title,
  genre,
}: SearchResultTitleInput) => {
  const router = useRouter();
  const hasTitle = !!title;
  const hasGenre = !!genre;
  if (!hasTitle && !hasGenre) {
    router.push('/');
  }
  return (
    <h1 className='mb-4 text-2xl font-bold'>
      <span> Search results for </span>
      {genre && (
        <>
          <span>genre </span>
          <span className='text-red-500'>{genre}</span>
        </>
      )}
      {title && genre && (
        <>
          <span> and </span>
        </>
      )}
      {title && (
        <>
          <span>title </span>
          <span className='text-red-500'>{title}</span>
        </>
      )}
    </h1>
  );
};
