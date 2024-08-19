import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
// import { NewsService } from '../../../news.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-news-updates',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './news-updates.component.html',
  styleUrl: './news-updates.component.css'
})
export class NewsUpdatesComponent {
  // news : any[] = [];
  // currentSlide = 0;

  // constructor(private newsService: NewsService) { }

  // ngOnInit(): void {
  //     this.newsService.getNews().subscribe(response => {
  //       this.news = response.articles.slice(0,7);
  //     });
  // }

  // nextSlide () {
  //   this.currentSlide = (this.currentSlide + 1) % this.news.length;
  // }

  // prevSlide () {
  //   this.currentSlide = (this.currentSlide - 1 + this.news.length) % this.news.length;
  // }
  news: any[] = [];
  @ViewChild('newsCarousel') newsCarousel!: ElementRef;

  constructor(private http: HttpClient) {
    this.fetchNews();
  }

  fetchNews() {
 
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=5a931cf2d28f4a9895eeea26b9718ddd`;
    
    this.http.get(apiUrl).subscribe((response: any) => {
      this.news = response.articles.map((article: any) => ({
        title: article.title,
        description: article.description,
        category: 'General', // You can change this based on the API response
        publishedAt: article.publishedAt
      }));
    });
  }

  scrollLeft() {
    this.newsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.newsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}








 


