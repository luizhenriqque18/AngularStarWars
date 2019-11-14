import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogContentPeopleComponent} from '../dialog-content-people/dialog-content-people.component';
import {People} from '../../../../shared/swapi/model/swapi.models';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent {

  @Input() type: string;
  @Input() dataPeople: People;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentPeopleComponent, {
      data: this.dataPeople,
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result:`, this.dataPeople);
    });
  }
}
