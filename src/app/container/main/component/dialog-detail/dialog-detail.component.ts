import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogContentPeopleComponent} from '../dialog-content-people/dialog-content-people.component';
import {People} from '../../../../shared/swapi/model/swapi.models';
import {DialogContentFilmComponent} from '../dialog-content-film/dialog-content-film.component';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.css']
})
export class DialogDetailComponent {

  @Input() typeDialogContet: string;
  @Input() dataList: People;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let component: any;

    switch (this.typeDialogContet) {
      case 'people':
        component = DialogContentPeopleComponent;
        break;
      case 'film':
        component = DialogContentFilmComponent;
        break;
    }

    const dialogRef = this.dialog.open(component, {
      data: this.dataList,
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result:`, this.dataPeople);
    });
  }
}
