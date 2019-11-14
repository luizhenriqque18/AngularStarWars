import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {SearchService} from '../../../../shared/search/search.service';
import {MainService} from '../../main.service';
import {PagesFilm, PagesPeople} from '../../../../shared/swapi/model/swapi.models';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-content-film',
  templateUrl: './content-film.component.html',
  styleUrls: ['./content-film.component.css']
})
export class ContentFilmComponent implements OnInit {

  constructor(private swapi: SwapiService,
              public searchService: SearchService,
              public mainService: MainService) {}

  public homePage = 'film';
  states: PagesFilm;
  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];

  // MatPaginator Output
  pageEvent: PageEvent = new  PageEvent();

  ngOnInit(): void {
    this.searchService.search$.subscribe((resp) => {
      if (this.mainService.getValue() === 1) {
        this.search(resp);
        this.pageEvent.pageIndex = 0;
      }
    });

    this.swapi.getPageFilms().subscribe( resp => {
      this.states = resp;
      this.length = this.states.count;
    });
    // this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {

    // });
  }

  nextOrPrevious(value?: PageEvent): PageEvent {
    if (this.searchService.getValue() !== null) {
      this.search(this.searchService.getValue(), value.pageIndex + 1 );
    } else {
      this.swapi.getPageFilms(value.pageIndex + 1).subscribe( resp => {
        this.states = resp;
        this.length = this.states.count;
      });
    }
    return value;
  }

  public search(value: string, page?: number) {
    this.swapi.searchFilms(value, page).subscribe( a => {
      this.states = a;
      this.length = this.states.count;
    });
  }

}
