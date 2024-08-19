import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { NewsService } from '../../../news.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news-updates',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './news-updates.component.html',
  styleUrl: './news-updates.component.css'
})
export class NewsUpdatesComponent implements OnInit {
  news : any[] = [];
  currentSlide = 0;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
      this.newsService.getNews().subscribe(response => {
        this.news = response.articles.slice(0,7);
      });
  }

  nextSlide () {
    this.currentSlide = (this.currentSlide + 1) % this.news.length;
  }

  prevSlide () {
    this.currentSlide = (this.currentSlide - 1 + this.news.length) % this.news.length;
  }
}

