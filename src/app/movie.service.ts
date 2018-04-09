import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class MovieService {

	constructor(
		private http: HttpClient
	) { }

	moviesList = [
		'odWxQ5eEnfE',
		'wO_lA6hV1Ag',
		'nOubjLM9Cbc',
		'v4pi1LxuDHc',
		'2zNSgSzhBfM',
		'JaAWdljhD5o',
		'IELSg25_6Rg',
		'QK8mJJJvaes',
		'262351620',
		'54348266',
		'167054481',
		'136765930'
	];

	// vimeo api
	vimeoPrefix = `https://vimeo.com/api/v2/video/`

	// youtube api
	ytPrefix = `https://www.googleapis.com/youtube/v3/videos?id=`;
	ytKey = `&key=AIzaSyD4DtKg_N2uJ0S059-zDB-PFpX9l1AqAd0`;
	ytSuffix = `&part=snippet,statistics&fields=items(id,snippet(title),statistics(viewCount,likeCount))`;


	ytMoviesDataJSON(): Observable<any> {
		return this.http.get(this.ytPrefix + this.moviesList.filter(movieId => !+movieId).join(',') + this.ytKey + this.ytSuffix);
	}

	vimeoMoviesDataJSON(): Promise<any> {
		return Promise.all(
			this.moviesList
				.filter(movieId => !!+movieId)
				.map(movieId => fetch(this.vimeoPrefix + movieId + '.json'))
		);
	}
}


