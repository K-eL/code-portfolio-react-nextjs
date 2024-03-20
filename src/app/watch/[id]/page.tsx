import Player from '@app/components/Player';
import { getMovieById } from '@core/modules/movie/services/MovieService';
import { notFound } from 'next/navigation';
import React from 'react';

interface IWatchProps {
  params: {
    id: string;
  };
}

export default async function Watch({ params }: IWatchProps) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    notFound();
  }

  return <Player movie={movie} />;
}
