import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsUpdatesComponent } from '../home/news-updates/news-updates.component';
import { ReviewsComponent } from '../home/reviews/reviews.component';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, NewsUpdatesComponent, ReviewsComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
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
        category: ['News'], 
        url: article.url,
        publishedAt: article.publishedAt
      }));
    });
  }
  submit() {
    window.open('https://docs.google.com/forms/d/1l6qgyncMYDI6llD8lvct2Wz7kJjrU0rOJ5y5Aic3PPA/viewform?edit_requested=true', '_blank');
  }
}
