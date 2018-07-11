import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPah = "https://api.themoviedb.org/3";

  constructor(public http: Http) {

    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(page = 1) {
    // return this.http.get(this.baseApiPah + "/movie/popular?api_key=18a67690b79736654ccab0099db55009")
    return this.http.get(this.baseApiPah + `/movie/popular?page=${page}&api_key=` + this.getApiKey())
  }

  //https://developers.themoviedb.org/3/movies/get-popular-movies
  getApiKey() {
    return "the_moviedb_api_key"
  }

  getMovieDetails(filmeId) {
    return this.http.get(this.baseApiPah + `/movie/${filmeId}?api_key=` + this.getApiKey())
  }

}
