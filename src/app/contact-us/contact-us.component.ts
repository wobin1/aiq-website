import { Component, Renderer2, ElementRef, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(

    private elementRef: ElementRef,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) { }


  ngOnInit(): void {
    const carousel = this.elementRef.nativeElement.querySelector('[data-carousel]');
    const slides = carousel.querySelector('[data-slides]');
    const buttons = carousel.querySelectorAll('[data-carousel-button]');
    buttons.forEach((button: Element) => {
      button.addEventListener('click', () => {
        const offset = button.getAttribute('data-carousel-button') === "next" ? 1 : -1;

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = Array.from(slides.children).indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        activeSlide.removeAttribute('data-active');
        slides.children[newIndex].setAttribute('data-active', 'true');
      });
    });

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
      hbspt.forms.create({
        region: "eu1",
        portalId: "26145073",
        formId: "82a4e477-2051-460a-b164-a32ccf28db0a"
      });
    `;

    console.log(script)

    this._renderer2.appendChild(this._document.getElementById('contact-us'), script);
  }



}
