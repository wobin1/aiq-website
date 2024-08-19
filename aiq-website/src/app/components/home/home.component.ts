import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { ReviewsComponent } from './reviews/reviews.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, OtherProductsComponent, SolutionsComponent, NewsUpdatesComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  video: HTMLVideoElement | null = null;
  btn: HTMLElement | null = null;

  ngAfterViewInit(): void {
    this.video = document.getElementById('video') as HTMLVideoElement | null;
    this.btn = document.getElementById('btn') as HTMLElement | null;
  }

  // Pause and play the video, and change the button text
  myFunction(): void {
    if (this.video && this.btn) {
      if (this.video.paused) {
        this.video.play();
        this.btn.innerHTML = 'Pause';
      } else {
        this.video.pause();
        this.btn.innerHTML = 'Play';
      }
    }
  }
  

}
