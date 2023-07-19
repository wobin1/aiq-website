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
    
   
    private router: Router
  ) {}

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
  }



}
