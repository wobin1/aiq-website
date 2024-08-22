import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent  {

  @ViewChild('reviewsCarousel') reviewsCarousel!: ElementRef;

  reviews : any [] = [
    {
      img : '/assets/military.jpg',
      text: 'The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here.',
      name: 'Margaret Olaitan',
      office: 'THE NIGERIAN ARMY GENERAL',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/military.jpg',
      text: 'The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here.',
      name: 'Margaret Olaitan',
      office: 'THE NIGERIAN NAVY GENERAL',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/image 6.jpg',
      text: 'The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here.',
      name: 'Margaret Olaitan',
      office: 'THE NIGERIAN NAVY GENERAL',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/image 6.jpg',
      text: 'The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here.',
      name: 'Margaret Olaitan',
      office: 'THE NIGERIAN NAVY GENERAL',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/image 6.jpg',
      text: 'The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here. The sentence about the review is what im writing here.',
      name: 'Margaret Olaitan',
      office: 'THE NIGERIAN NAVY GENERAL',
      profile: '/assets/profile.jpg'
    }
  ]

  reviewItem = this.reviews.map((review: any)=>({
    image: review.img,
    content: review.text,
    name: review.name,
    office: review.office,
    profile: review.profile
  }))

  

  
  goLeft() {
    this.reviewsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  goRight() {
    this.reviewsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  
}




