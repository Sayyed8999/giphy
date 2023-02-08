import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendSearchValueService {

  public searchedValue = '';
  public Subject = new Subject<string>();
  constructor() { }


  updateValue(val: string) {
    this.searchedValue = val;
    this.Subject.next(this.searchedValue);
  }
}
