import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  private movies: any;

  constructor(private movieService: MovieService) { }

  getMovies(): void {
    this.movieService.moviesDataJSON()
      .subscribe(moviesData => {
        this.movies = moviesData['items'];
        console.log(moviesData);
      });
  }

  grid: boolean = true;
  prefix = 'https://www.youtube.com/embed/';
  suffix = '?rel=0&amp;controls=0&amp;showinfo=0';

  ngOnInit() {
    this.getMovies();
  }

}
