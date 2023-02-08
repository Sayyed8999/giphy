import {Component, OnInit } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { SendSearchValueService } from '../services/send-search-value.service';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.scss']
})
export class DisplayGifsComponent implements OnInit {
  // initializaiton of variables
  public gifs!: any;
  public receivedSearchedValue: string = ''
  public pagedItems!:any;
  public currentPage = 1;
  public pageSize:number = 3;
  public numberOfPages!: number;

  constructor(private fetchGifsSvc: FetchService, private SendSearchValueService: SendSearchValueService) { }
 

  ngOnInit() {
// Subscribing the getTrendingGifs method of FetchService in order to get data from api
    const apiKey = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';
    this.fetchGifsSvc.getTrendingGifs(apiKey)
      .subscribe((data: any) => {
        

        this.gifs = data['data'];
        this.numberOfPages = Math.floor(this.gifs.length / this.pageSize);
        this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
        
        // console.log(data);
        // console.log(this.numberOfPages);
        // console.log(this.pagedItems," p");
        // console.log(this.gifs);



      });
   
//Recieving the search box value from the subject
    this.SendSearchValueService.Subject.subscribe(value => {
      this.receivedSearchedValue = value;
      console.log(this.receivedSearchedValue);

    });

    

  }


  
  
  
  

  
//pagination methods
  previousPage() {
    (this.currentPage>1)?this.currentPage--:this.currentPage==1;
    this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  nextPage() {
    (this.currentPage<10)?this.currentPage++:this.currentPage==10;
    this.pagedItems = this.gifs.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }
}
