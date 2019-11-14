import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {People, Film, Planet} from '../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {MatRadioChange} from '@angular/material';
import Cart from './model/cart';
import {MainService} from './main.service';
import {MatTabChangeEvent} from '@angular/material/typings/tabs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  public selected: number;

  constructor(private swapi: SwapiService,
              private mainService: MainService) {}


  ngOnInit(): void {
      this.mainService.tapIndex$.subscribe(resp => {
        this.selected = resp;
        console.log(this.selected);
      });
  }

  tapChange(value: MatTabChangeEvent) {
    this.mainService.tapIndex.next(value.index);
  }
}
