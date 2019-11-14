import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {People, Film} from '../../../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {Observable, forkJoin} from 'rxjs';

@Component({
  selector: 'app-dialog-content-people',
  templateUrl: './dialog-content-people.component.html',
  styleUrls: ['./dialog-content-people.component.css']
})
export class DialogContentPeopleComponent implements OnInit {

  public films: Array<Film>;
  public filmsO: Array<Observable<any>>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: People,
              private swapi: SwapiService) {  }

  ngOnInit(): void {

    this.filmsO = this.data.films.map( resp => this.swapi.getUrlFilms(resp));

    forkJoin(this.filmsO).subscribe( resp =>
      this.films = resp
    );

    //this.swapi.getUrlFilms(this.data.films[0]).subscribe( resp => {
    //  this.films = resp;
    //});
  }
}
