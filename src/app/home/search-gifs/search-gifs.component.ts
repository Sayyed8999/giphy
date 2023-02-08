import { Component } from '@angular/core';
import { SendSearchValueService } from '../services/send-search-value.service'

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.scss']
})
export class SearchGifsComponent {
  public srchedvalue: string = '';

  constructor(private SendSearchValueService: SendSearchValueService) { }
  
  // Sending searched value to subject in order to use it in the Display component using keyup event
  SearchedValue() {
    this.SendSearchValueService.Getsearchvalue(this.srchedvalue);
  }


}
