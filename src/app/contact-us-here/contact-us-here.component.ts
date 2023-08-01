import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact-us-here',
  templateUrl: './contact-us-here.component.html',
  styleUrls: ['./contact-us-here.component.css']
})
export class ContactUsHereComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }
  ngOnInit() {
    this.scrollToTop();
  }
  
  ngAfterViewInit() {
    this.scrollToTop();
  }
  
  private scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
