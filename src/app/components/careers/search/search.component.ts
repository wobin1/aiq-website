import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search = [
    {
    title: "Software Engineer",
    subtext: "We are seeking a talented and experienced Software Engineer to join our team and contribute to the development of innovative software solutions. As a Software Engineer, you will play a crucial role in developing, and maintaining our products."
    },
    {
    title: "Product Designer",
    subtext: "We are seeking a talented and passionate Product Designer to join our team and help us create exceptional user experiences. As a Product Designer, you will play a pivotal role in shaping the future of our products by combining user-centered design principles with innovative thinking."
    },
    {
    title: "Product Manager",
    subtext: "We are seeking a talented and strategic Product Manager to join our team and drive the success of our products. As a Product Manager, you will be responsible for defining the product vision, roadmap, and strategy. You will collaborate closely with engineering, design, and sales teams to deliver exceptional products that meet customer needs."
    },
    {
    title: "Graphics Designer",
    subtext: "We are seeking a talented and creative Graphics Designer to join our team and contribute to the visual identity of our brand. As a Graphics Designer, you will be responsible for creating compelling visual assets that align with our brand guidelines and enhance user experience."
    },
    {
    title: "Digital Marketer",
    subtext: "We are seeking a dynamic and results-oriented Digital Marketer to join our team and drive growth through innovative digital strategies. As a Digital Marketer, you will be responsible for developing and executing marketing campaigns across various digital channels to increase brand awareness, generate leads, and drive customer acquisition."
    }, 
    {
      title: "Social Media Manager",
      subtext: "We are seeking a creative and engaging Social Media Manager to join our team and build a strong online presence for our brand. As a Social Media Manager, you will be responsible for developing and executing social media strategies to increase brand awareness, drive engagement, and generate leads."
    },
    {
      title: "HR",
      subtext: "We are seeking a dynamic and experienced HR professional to join our team and support the growth of our organization. As an HR Generalist, you will be responsible for a wide range of HR functions, including recruitment, onboarding, employee relations, and benefits administration."
    }
    
  ]

    searchItem = this.search.map((jobs)=>({
      title : jobs.title,
      subtext : jobs.subtext
    }))

    activeIndex: number | null = null;
    toggleAccordion(index: number): void {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    }



}
