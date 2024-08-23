import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Slide {
  h1: string;
  p: string;
  img: string;
  svg: string;
}

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  
 
  slides: Slide[] = [
    {
      h1: 'Defence and Intelligence',
      p: 'Creating a comprehensive demo without specific product details is challenging. The following outline provides a general framework for demonstrating the value proposition of an intelligence gathering product for national defense.',
      img: 'assets/image 34.jpg',
      svg: 'assets/Security.svg'
    },
    {
      h1: 'Journalists',
      p: 'Journalism made easy\! Get access to all of the latest and juicy news that can help boost the reliability and confidence in your company.',
      img: 'assets/image 30.jpg',
      svg: 'assets/megaphone.svg'
    },
    {
      h1: 'Researchers',
      p: 'Creating a comprehensive demo without specific product details is challenging. The following outline provides a general framework for demonstrating the value proposition of an intelligence gathering product for national defense.',
      img: 'assets/image 32.jpg',
      svg: 'assets/Research.svg'
    },
    {
      h1: 'Humanitarian',
      p: 'Creating a comprehensive demo without specific product details is challenging. The following outline provides a general framework for demonstrating the value proposition of an intelligence gathering product for national defense.',
      img: 'assets/image 31.jpg',
      svg: 'assets/Give Money.svg'
    },
    {
      h1: 'Others',
      p: 'Creating a comprehensive demo without specific product details is challenging. The following outline provides a general framework for demonstrating the value proposition of an intelligence gathering product for national defense.',
      img: 'assets/image 52.jpg',
      svg: 'assets/categories.svg'
    }
  ];

  currentSlideIndex = 0;

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

   x = ["Defence and intelligence", "Journalists", "Researchers", "Humanitarians", "Others"];
}



