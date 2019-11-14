import {Component, Input, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {SearchService} from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() homePage: string = '';

  constructor(public  searchService: SearchService) { }

  stateCtrl = new FormControl();

  ngOnInit() {
    this.stateCtrl.valueChanges.pipe(debounceTime(500)).subscribe((resp) => {
        this.searchService.search.next(resp);
    });
  }
}
