import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=5a931cf2d28f4a9895eeea26b9718ddd';
  constructor(private http:HttpClient) { }

  getNews(): Observable<any> 
  {
    return this.http.get<any>(this.url);
  }
}
