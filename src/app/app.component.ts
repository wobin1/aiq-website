import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function; // Declare the gtag function for TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('globeViz, content') componentRefs: any;
  @ViewChild('globeViz', { static: false })
  globeVizEl!: ElementRef;
  dataRequest: any;
  world: any;
  title = 'front';
  place = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-V2C1DDWZBH', { page_path: event.urlAfterRedirects });
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
