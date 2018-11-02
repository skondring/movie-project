import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieInformationService {

  private url:string = 'http://www.omdbapi.com/?apikey=e184ec70';

  @Output() searchDone: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private http:HttpClient) { }

  getMovieByTitle(mTitle) {
    return this.http.get(this.url + '&t=' + mTitle);
  }
}