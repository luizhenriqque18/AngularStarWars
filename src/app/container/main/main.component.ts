import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {People, Film, Planet} from '../../shared/swapi/model/swapi.models';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {debounceTime, map, tap} from 'rxjs/operators';
import {MatRadioChange} from '@angular/material';
import Cart from './model/cart';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  private selected: string;

  constructor(private swapi: SwapiService) {}


  ngOnInit(): void {

  }

  click(value) {
    console.log(value);
  }
}
