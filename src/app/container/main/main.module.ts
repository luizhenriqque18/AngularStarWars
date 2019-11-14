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

@NgModule({
  declarations: [
    MainComponent,
    CardComponent,
    CardListComponent,
    ContentPeopleComponent,
    CardFilmComponent,
    DialogDetailComponent,
    DialogContentPeopleComponent
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
  providers: [SwapiService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [DialogContentPeopleComponent]
})
export class MainModule { }
