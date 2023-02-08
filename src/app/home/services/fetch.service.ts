import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  baseurl: string = 'https://api.giphy.com/v1/gifs/trending'
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
// Method for Getting the data from the api.
  getTrendingGifs(apiKey: string, limit = 30) {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}`,{ 'headers': this.headers });
  }
}
