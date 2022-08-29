import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Movie, PagedMovies } from 'src/interfaces/app-interfaces';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getMovies(): Array<Movie> {
    return this.movieService.getMovies();
  }

  @Get('paged-movies/:pageNumber/:pageSize')
  getPagedMovies(
    @Param('pageNumber', new ParseIntPipe()) pageNumber,
    @Param('pageSize', new ParseIntPipe()) pageSize,
  ): PagedMovies {
    return this.movieService.getPagedMovies(pageNumber, pageSize);
  }
}
