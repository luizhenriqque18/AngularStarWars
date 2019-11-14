import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() data: Array<any>;
  @Input() typeDialogContet: string;

  constructor() { }

  ngOnInit(){

  }

}
