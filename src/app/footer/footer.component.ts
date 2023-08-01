import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router,private viewportScroller: ViewportScroller) {}
  
  current_year = new Date().getFullYear();

  ngOnInit(): void {
  }
  navigateToContactUs(content: string): void {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.router.navigate([content]);
  }

}
