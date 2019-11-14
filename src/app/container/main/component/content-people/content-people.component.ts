import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';
import {PagesPeople, People} from '../../../../shared/swapi/model/swapi.models';
import {isUndefined} from 'util';

@Component({
  selector: 'app-content-people',
  templateUrl: './content-people.component.html',
  styleUrls: ['./content-people.component.css']
})
export class ContentPeopleComponent implements OnInit, AfterViewInit {

  constructor(private swapi: SwapiService) {}

  @Input() data: Array<People>;

  stateCtrl = new FormControl();
  states: PagesPeople;
  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];

  // MatPaginator Output
  pageEvent: PageEvent;

  ngAfterViewInit(): void {
    this.swapi.getPagePeoples().subscribe( resp => {
      this.states = resp;
      this.length = this.states.count;
    });
  }

  ngOnInit(): void {
    this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {
      this.pageEvent.pageIndex = 0;
      this.search(resp);
    });
  }

  nextOrPrevious(value?: PageEvent): PageEvent {
    if (this.stateCtrl.value !== null) {
      this.search(this.stateCtrl.value, value.pageIndex + 1 );
    } else {
      this.swapi.getPagePeoples(value.pageIndex + 1).subscribe( resp => {
        this.states = resp;
        this.length = this.states.count;
      });
    }
    return value;
  }

  public search(value: string, page?: number) {
    this.swapi.searchPeople(value, page).subscribe( a => {
      this.states = a;
      this.length = this.states.count;
    });
  }
}
