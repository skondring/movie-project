import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieInformationService } from '../movie-information.service';

@Component({
  selector: 'app-movie-information',
  templateUrl: './movie-information.component.html',
  styleUrls: ['./movie-information.component.css']
})
export class MovieInformationComponent implements OnInit {
  //cMovie:Movie = new Movie('Ein Test', 'Max Mustermann', 'Action', '10', '1990', '1990');
  cMovie:Movie;

  constructor(private movieInformation:MovieInformationService) { }

  ngOnInit() {
    this.movieInformation.searchDone.subscribe((d)=>this.refreshMovie(d));
  }

  refreshMovie(data) {
    this.cMovie = data;
  }

}
