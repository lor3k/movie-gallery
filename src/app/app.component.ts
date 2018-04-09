import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

	private movies = [];

	constructor(private movieService: MovieService) { }

	getMovies(): void {
		this.movieService.ytMoviesDataJSON()
			.subscribe(moviesData => {
				moviesData['items'].forEach(movie => {
					this.movies.push({
						'id': movie.id,
						'title': movie.snippet.title,
						'viewCount': movie.statistics.viewCount,
						'likeCount': movie.statistics.likeCount,
						'addedDate': Date.now()
					});
				})
			})
		this.movieService.vimeoMoviesDataJSON()
			.then(dataArr => dataArr.map(res => res.json())) 
			.then(jsonArr => {
				jsonArr.forEach(moviePromise => {
					moviePromise.then(res => res[0]).then(movie => {
						this.movies.push({
							'id': movie.id,
							'title': movie.title,
							'viewCount': movie.stats_number_of_plays,
							'likeCount': movie.stats_number_of_likes,
							'addedDate': Date.now()
						})
					})
				})
			})
	}

	getMovieSrc(movie): string {
		return +movie['id'] ?
			this.vimeoPrefix + movie['id']
			:
			this.ytPrefix + movie['id'] + this.ytSuffix;
	}

	grid: boolean = true;

	ytPrefix: string = 'https://www.youtube.com/embed/';
	ytSuffix: string = '?rel=0&amp;controls=0&amp;showinfo=0';

	vimeoPrefix: string = 'https://player.vimeo.com/video/'

	ngOnInit() {
		this.getMovies();
	}

}
