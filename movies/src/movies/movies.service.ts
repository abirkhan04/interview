import { Injectable } from '@nestjs/common';
import { Movie, PagedMovies } from 'src/interfaces/app-interfaces';

@Injectable()
export class MoviesService {
  getPagedMovies(pageNumber: number, pageSize: number): PagedMovies {
    const movies: Movie[] = [
      { title: 'Movie 1', detail: 'Movie 1 detail', rating: 5 },
      { title: 'Movie 2', detail: 'Movie 2 detail', rating: 4 },
      { title: 'Movie 3', detail: 'Movie 3 detail', rating: 3 },
      { title: 'Movie 4', detail: 'Movie 4 detail', rating: 4 },
      { title: 'Movie 5', detail: 'Movie 5 detail', rating: 1 },
      { title: 'Movie 6', detail: 'Movie 6 detail', rating: 5 },
      { title: 'Movie 7', detail: 'Movie 7 detail', rating: 5 },
      { title: 'Movie 8', detail: 'Movie 8 detail', rating: 4 },
    ];
    const pageCount = Math.ceil(movies.length / pageSize);
    const result: PagedMovies = {
      pageCount,
      movies: movies.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
    };
    return result;
  }

  getMovies(): Array<Movie> {
    return [
      { title: 'Movie 1', detail: 'Movie 1 detail', rating: 5 },
      { title: 'Movie 2', detail: 'Movie 2 detail', rating: 4 },
    ];
  }
}
