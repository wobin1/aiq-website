import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation, TemplateRef, ViewChildren, QueryList } from '@angular/core';
import * as d3 from 'd3';
import Globe from 'globe.gl'
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('globeViz, content') componentRefs: any;
  @ViewChild('globeViz', { static: false })
  globeVizEl!: ElementRef;
  dataRequest: any;
  world: any;
  title = 'front';
  totalOpenCanvas: number = 0;
  

  constructor(private http: HttpClient, private offcanvasService: NgbOffcanvas, private router: Router) { }

  ngOnInit(): void {
    this.dataRequest = this.http.get<any>("./assets/data/countries-adm0.geojson");
    this.world = Globe()
  }

  ngAfterViewInit(): void {
    this.router.events.forEach((event) => {
      console.log(this.totalOpenCanvas     )
      if(event instanceof NavigationStart) {
        if (event.url != "/"){
          this.openEnd(this.componentRefs.last)
          this.totalOpenCanvas += 1;
        }
      }
    });
    const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlGnBu);

    const getVal = (feat: any) => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

    this.dataRequest.subscribe((countries: any) => {
      const maxVal = Math.max(...countries.features.map(getVal));
      colorScale.domain([0, maxVal]);

      this.world(this.globeVizEl.nativeElement)
        .globeImageUrl('assets/earth-night.jpg')
        .lineHoverPrecision(0)
        .polygonsData(countries.features.filter((d: any) => d.properties.ISO_A2 !== 'AQ'))
        .polygonAltitude(0.01)
        .polygonCapColor((feat: any) => colorScale(getVal(feat)))
        .polygonSideColor(() => 'rgba(0, 100, 0, 0.15)')
        .backgroundColor("rgba(0,0,0,0)")
        .polygonStrokeColor(() => '#111')
        .polygonsTransitionDuration(300)
        .width(this.globeVizEl.nativeElement.clientWidth)
        .height(this.globeVizEl.nativeElement.clientHeight)
      // .borderSize(0)

      this.world.camera().zoom = 1.5
      this.world.controls().autoRotate = true;
      this.world.controls().autoRotateSpeed = 1.8;
    })
  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

}
