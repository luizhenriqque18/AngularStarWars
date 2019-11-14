import {Component, Input, OnInit} from '@angular/core';
import {Film, People} from '../../../../shared/swapi/model/swapi.models';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {

  constructor() { }

  @Input() dataFilms: Film;

  ngOnInit() {
  }

}
