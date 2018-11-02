import { Component, OnInit } from '@angular/core';
import { MovieInformationService } from '../movie-information.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  mTitle:string = '';

  constructor(private movieInformation:MovieInformationService) { }

  ngOnInit() {
  }

  doSearch() {
    this.movieInformation.getMovieByTitle(this.mTitle)
    .subscribe(
      //d=>console.log(d),
      (d:any)=>this.movieInformation.searchDone.emit(new Movie(d.Title,d.Actors,d.Plot,d.Genre,d.imdbRating,d.Year,d.Poster)),
      e=>console.log(e));
  }

}
