import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  reviews : any [] = [
    {
      img : '',
      text: '',
      name: '',
      office: '',
      profile: ''
    }]


}
