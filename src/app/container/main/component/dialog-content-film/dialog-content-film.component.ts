import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Film, People} from '../../../../shared/swapi/model/swapi.models';
import {forkJoin, Observable} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {SearchService} from '../../../../shared/search/search.service';
import {MainService} from '../../main.service';

@Component({
  selector: 'app-dialog-content-film',
  templateUrl: './dialog-content-film.component.html',
  styleUrls: ['./dialog-content-film.component.css']
})
export class DialogContentFilmComponent implements OnInit {

  public peoples: Array<People>;
  public filmsO: Array<Observable<any>>;

  constructor(public dialogRef: MatDialogRef<DialogContentFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Film,
              private swapi: SwapiService,
              private searchService: SearchService,
              private mainService: MainService) {  }

  ngOnInit(): void {
    this.filmsO = this.data.characters.map( resp => this.swapi.getUrlPeople(resp));

    forkJoin(this.filmsO).subscribe( resp =>
      this.peoples = resp
    );
  }

  public saibaMais(value: string) {
    this.mainService.tapIndex.next(0);
    this.searchService.search.next(value);
    this.dialogRef.close();
  }

}
