import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsUpdatesComponent } from '../home/news-updates/news-updates.component';
import { ReviewsComponent } from '../home/reviews/reviews.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, NewsUpdatesComponent, ReviewsComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {
  currentIndex = 1;
  totalCards = 4;  // Number of cards in the carousel
  // currentCard = 0;

  constructor(private router: Router){}

  nextSlide() {
    if (this.currentIndex < this.totalCards ) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
  }

  route(page:string){
    this.router.navigateByUrl(page)
  }

  submit() {
    window.open('https://docs.google.com/forms/d/1l6qgyncMYDI6llD8lvct2Wz7kJjrU0rOJ5y5Aic3PPA/viewform?edit_requested=true', '_blank');
  }
}
