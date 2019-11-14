import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {People, Film} from '../../../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {Observable, forkJoin} from 'rxjs';
import {SearchService} from '../../../../shared/search/search.service';
import {MainService} from '../../main.service';

@Component({
  selector: 'app-dialog-content-people',
  templateUrl: './dialog-content-people.component.html',
  styleUrls: ['./dialog-content-people.component.css']
})
export class DialogContentPeopleComponent implements OnInit {

  public films: Array<Film>;
  public filmsO: Array<Observable<any>>;

  constructor(public dialogRef: MatDialogRef<DialogContentPeopleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: People,
              private swapi: SwapiService,
              private searchService: SearchService,
              private mainService: MainService) {  }

  ngOnInit(): void {
    this.filmsO = this.data.films.map( resp => this.swapi.getUrlFilms(resp));

    forkJoin(this.filmsO).subscribe( resp =>
      this.films = resp
    );
  }

  public saibaMais(value: string){
    this.mainService.tapIndex.next(1);
    this.searchService.search.next(value);
    this.dialogRef.close();
  }
}
