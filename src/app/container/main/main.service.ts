import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }


  public tapIndex = new BehaviorSubject<number>(0);

  tapIndex$ = this.tapIndex.asObservable();

  public getValue(): number{
    return this.tapIndex.getValue();
  }
}
