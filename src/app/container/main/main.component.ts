import {SwapiService} from '../../shared/swapi/swapi.service';
import {MainService} from './main.service';
import {MatTabChangeEvent} from '@angular/material/typings/tabs';
import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../shared/search/search.service';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public selected: number;
  private value: Array<{tab: number, value: string}> = [];

  constructor(private swapi: SwapiService,
              private mainService: MainService,
              private searchService: SearchService) {}


  ngOnInit(): void {
      this.mainService.tapIndex$.subscribe(resp => {
        this.selected = resp;
      });
  }

  tapChange(value: MatTabChangeEvent) {
    this.mainService.tapIndex.next(value.index);
  }
}
