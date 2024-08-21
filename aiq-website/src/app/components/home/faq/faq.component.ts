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
        question: "Questions about AIQ",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sunt praesentium dolore fugiat. Distinctio, consectetur. Perspiciatis aspernatur sequi aliquam. Officiis."
        },
        {
          question: "Questions about AIQ",
          answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sunt praesentium dolore fugiat. Distinctio, consectetur. Perspiciatis aspernatur sequi aliquam. Officiis."
        },
        {
          question: "Questions about AIQ",
          answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sunt praesentium dolore fugiat. Distinctio, consectetur. Perspiciatis aspernatur sequi aliquam. Officiis."
        },
        {
          question: "Questions about AIQ",
          answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sunt praesentium dolore fugiat. Distinctio, consectetur. Perspiciatis aspernatur sequi aliquam. Officiis."
        },
        {
          question: "Questions about AIQ",
          answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sunt praesentium dolore fugiat. Distinctio, consectetur. Perspiciatis aspernatur sequi aliquam. Officiis."
        }]

        faqItem = this.faq.map((faqs)=>({
          question : faqs.question,
          answer : faqs.answer
        }))


        @ViewChild('open') open!:ElementRef;


     openAcc () {
      this.open.nativeElement.style({display : "block"})
     }



}
