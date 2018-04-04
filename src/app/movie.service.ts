import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient) { }

  moviesList = [
    'odWxQ5eEnfE',
    'wO_lA6hV1Ag',
    'nOubjLM9Cbc',
    'v4pi1LxuDHc',
    'R2LQdh42neg',
    '2zNSgSzhBfM',
    'JaAWdljhD5o',
    'IELSg25_6Rg',
    'QK8mJJJvaes'
  ];

  prefix = `https://www.googleapis.com/youtube/v3/videos?id=`;
  key = `&key=AIzaSyD4DtKg_N2uJ0S059-zDB-PFpX9l1AqAd0`;
  suffix = `&part=snippet,statistics&fields=items(id,snippet(title),statistics(viewCount,likeCount))`;

  moviesDataJSON() {
    return this.http.get(this.prefix + this.moviesList.join(',') + this.key + this.suffix);
  }

}
