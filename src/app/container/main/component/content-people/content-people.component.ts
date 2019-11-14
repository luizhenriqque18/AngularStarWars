import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SwapiService} from '../../../../shared/swapi/swapi.service';
import {PageEvent} from '@angular/material/paginator';
import {PagesPeople, People} from '../../../../shared/swapi/model/swapi.models';
import {SearchService} from '../../../../shared/search/search.service';
import {MainService} from '../../main.service';

@Component({
  selector: 'app-content-people',
  templateUrl: './content-people.component.html',
  styleUrls: ['./content-people.component.css']
})
export class ContentPeopleComponent implements OnInit{

  constructor(private swapi: SwapiService,
              public searchService: SearchService,
              public mainService: MainService) {}

  public homePage = 'people';
  states: PagesPeople;
  // MatPaginator Inputs
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [10];

  // MatPaginator Output
  pageEvent: PageEvent = new  PageEvent();

  ngOnInit(): void {
    console.log('ngOnInit');
    this.searchService.search$.subscribe((resp) => {
      if(this.mainService.getValue() == 0){
        this.search(resp);
        this.pageEvent.pageIndex = 0
      }
    })

    this.swapi.getPagePeoples().subscribe( resp => {
      this.states = resp;
      this.length = this.states.count;
    });
    //this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {

    //});
  }

  nextOrPrevious(value?: PageEvent): PageEvent {
    if (this.searchService.getValue() !== null) {
      this.search(this.searchService.getValue(), value.pageIndex + 1 );
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
