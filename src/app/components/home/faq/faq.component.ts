import { Component, ElementRef } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
      faq = [
        {
        question: "What is AIQ?",
        answer: "AIQ is Africa’s first defense and intelligence-focused AI company, providing bespoke and turnkey solutions to empower defense and intelligence communities with actionable insights. We are Africa's pioneering startup specializing in defense and intelligence AI solutions, with a focus on multi-source data fusion and geospatial intelligence."
        },
        {
          question: "What is AIQ’s mission?",
          answer: "Our mission is to unlock the insights from data and enable members of the defense and intelligence communities to derive actionable intelligence, faster."
        },
        {
          question: "What industries does AIQ serve?",
          answer: "We serve a wide range of industries including defense, intelligence, private and public organizations, journalism, research, law enforcement, and many other industries."
        },
        {
          question: "How does AIQ ensure data security?",
          answer: "Our products are built with end-to-end encryption and the highest security standards to protect sensitive information."
        },
        {
          question: "Can AIQ’s solutions be customized?",
          answer: "Yes, some of our solutions have been white-labeled across intelligence organizations. More so, our solutions are designed to be flexible and can be tailored to meet the specific needs of our clients."
        }, {
          question: "How can I get in touch with AIQ?",
          answer: `To learn more about AIQ's solutions and discuss your specific needs, please contact our sales team. We can provide you with a personalized demo and answer any questions you may have. You can contact us through our website by clicking the "Get in Touch" button at the top of the page or send an email to support(@)aiq.ng.`
        }]

        faqItem = this.faq.map((faqs)=>({
          question : faqs.question,
          answer : faqs.answer
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
