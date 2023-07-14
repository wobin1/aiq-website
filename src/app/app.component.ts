import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as d3 from 'd3';
import Globe from 'globe.gl';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private http: HttpClient,
    
    private offcanvasService: NgbOffcanvas,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataRequest = this.http.get<any>(
      './assets/data/countries-adm0.geojson'
    );
    this.world = Globe();
    
  }

  ngAfterViewInit(): void {
    console.log()
    this.router.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  
 
  
  }

  closeCanvas() {
    this.offcanvasService.dismiss();
    this.router.navigate(['/']);
  }


}
