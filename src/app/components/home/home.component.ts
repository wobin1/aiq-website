import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, OtherProductsComponent, SolutionsComponent, NewsUpdatesComponent, ReviewsComponent, FaqComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
