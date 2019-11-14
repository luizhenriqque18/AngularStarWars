import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwapiService} from '../../shared/swapi/swapi.service';
import {CardComponent} from './component/card/card.component';
import {CardListComponent} from './component/card-list/card-list.component';
import {ContentPeopleComponent} from './component/content-people/content-people.component';
import {DialogContentPeopleComponent} from './component/dialog-content-people/dialog-content-people.component';
import {DialogDetailComponent} from './component/dialog-detail/dialog-detail.component';
import {CardFilmComponent} from './component/card-film/card-film.component';
import {SearchComponent} from '../../shared/search/search.component';
import {ContentFilmComponent} from './component/content-film/content-film.component';
import {DialogContentFilmComponent} from './component/dialog-content-film/dialog-content-film.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    CardFilmComponent,
    CardListComponent,
    ContentFilmComponent,
    ContentPeopleComponent,
    CardFilmComponent,
    SearchComponent,
    DialogDetailComponent,
    DialogContentPeopleComponent,
    DialogContentFilmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    MainComponent
  ],
  providers: [SwapiService,
    { provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [DialogContentPeopleComponent, DialogContentFilmComponent]
})
export class MainModule { }
