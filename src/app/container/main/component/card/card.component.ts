import {Component, Input, OnInit} from '@angular/core';
import {People} from '../../../../shared/swapi/model/swapi.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() people: People;

  ngOnInit() {
  }
}
