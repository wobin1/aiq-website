import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
      img : '/assets/onsa.png',
      text: "AIQ’s cutting-edge tools have completely transformed how we gather intelligence. HYDRA's real-time data scanning has given our team unparalleled insights, helping us monitor events across the country.",
      name: 'Defense Analyst',
      office: 'National Security Agency',
      profile: '/assets/onsa.jpg'
    },
    {
      img : '/assets/DSA.jpeg',
      text: "With AIQ’s GeoAI Tools, we are always updated on our geospatial needs. The platform has significantly improved our ability to coordinate efforts, ensuring increased effectiveness and efficiency.",
      name: 'Analyst',
      office: 'Defense Space Administration ',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/DIA.jpeg',
      text: "AIQ's bespoke solutions, especially the DATA CAMP platform, have streamlined our intelligence analysis process. It’s no wonder they have the recommendation of the Chief.",
      name: 'Personel',
      office: 'defence intelligence agency',
      profile: '/assets/profile.jpg'
    },
    {
      img : '/assets/security.png',
      text: "We were impressed by AIQ's ability to tailor two of their solutions to our specific needs. Their team of experts worked closely with us to develop a customized platform that has significantly improved our operations.",
      name: 'Analysts',
      office: 'Private Security',
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

  constructor(private router: Router) {}


  goLeft() {
    this.reviewsCarousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  goRight() {
    this.reviewsCarousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  navigateHandler() {
    this.router.navigate(['/company']);
  }
}




