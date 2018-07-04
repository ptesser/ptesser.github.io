export interface MovieList {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  original_languages: string;
  poster_path: string;
  genres_ids: string[];
  video: boolean;
  vote_average: number;
  vote_count: number;
  image: string;
}
