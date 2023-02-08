import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SendSearchValueService } from '../services/send-search-value.service'

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.scss']
})
export class SearchGifsComponent {
  public srchedvalue: string = '';

  constructor(private SendSearchValueService: SendSearchValueService) { }
  SearchedValue() {
    this.SendSearchValueService.updateValue(this.srchedvalue);
  }


}
