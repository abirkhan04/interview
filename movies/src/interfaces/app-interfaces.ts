export interface User {
  username: string;
  password: string;
}

export interface AuthResponse {
  token?: string;
  message?: string;
}

export interface Movie {
  title: string;
  detail: string;
  rating: number;
}

export interface PagedMovies {
  pageCount: number;
  movies: Movie[];
}
