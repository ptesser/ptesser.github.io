import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  readonly movies = this.movie.discover();

  constructor(
    private readonly movie: MovieService,
  ) {
  }

  ngOnInit() {
  }

}
