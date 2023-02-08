import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { SendSearchValueService } from '../services/send-search-value.service';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.scss']
})
export class DisplayGifsComponent implements OnInit {
  public gifs!: any[];
  public receivedSearchedValue: string = ''
  public pagedItems!:any;;
  public currentPage = 1;
  public pageSize:number = 3;
  public numberOfPages!: number;

  constructor(private fetchGifsSvc: FetchService, private SendSearchValueService: SendSearchValueService) { }
 

  ngOnInit() {

    const apiKey = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';
    this.fetchGifsSvc.getTrendingGifs(apiKey)
      .subscribe((data: any) => {
        console.log(data);

        this.gifs = data['data'];
        this.numberOfPages = Math.floor(this.gifs.length / this.pageSize);
        this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
        console.log(this.numberOfPages);
        console.log(this.pagedItems," p");
        console.log(this.gifs);



      });
    this.diplayGifs();

    this.SendSearchValueService.Subject.subscribe(value => {
      this.receivedSearchedValue = value;
      console.log(this.receivedSearchedValue);

    });

    

  }


  diplayGifs() {
    if (this.gifs) {
      console.log(this.gifs)
    } else {
      console.log('error');

    }

  }
  updateValue() {
    this.SendSearchValueService.updateValue(this.receivedSearchedValue);
    
  }

  
  

  
//pagination
  previousPage() {
    (this.currentPage>1)?this.currentPage--:this.currentPage==1;
    this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  nextPage() {
    (this.currentPage<10)?this.currentPage++:this.currentPage==10;
    this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }
}
