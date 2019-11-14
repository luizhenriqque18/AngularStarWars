import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  public search = new BehaviorSubject<string>('');

  search$ = this.search.asObservable();

  public getValue(): string{
    return this.search.getValue();
  }
}
