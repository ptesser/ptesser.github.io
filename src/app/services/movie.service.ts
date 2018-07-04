import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { MovieList, Movie } from '../models/movie';

@Injectable()
export class MovieService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  discover(): Observable<MovieList> {
    const path = `${environment.movieBaseUrl}/discover/movie?api_key=${environment.movieAppKey}`;

    return this.http.get(path)
      .pipe(
        map((res: MovieList) => res),
        map((res) => {
          const results: Movie[] = res.results.map((m) => ({
            ...m,
            image: `${environment.movieImageBaseUrl}/${m.poster_path}`,
          }));
          return {
            ...res,
            results,
          };
        }),
      );

  }

  /**
   * Download image, to use we need to parse it in base64
   * @param pathId
   */
  image(pathId) {
    const path = `${environment.movieImageBaseUrl}/${pathId}`;
    return this.http.get(path);
    // .map((response) => response.arrayBuffer())
    // .map((buffer) => new Uint8Array(buffer))
    // .map((array: any) => String.fromCharCode(...array)),
  }

}
