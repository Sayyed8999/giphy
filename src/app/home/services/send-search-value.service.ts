import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendSearchValueService {
// Subject for communication between DisplayGifsComponent and SearchGifsComponent for search functionality.

  public Subject = new Subject<string>();
  constructor() { }

//Assigning the recieved searched value to Subject
  Getsearchvalue(val: string) {
    this.Subject.next(val);
  }
}
