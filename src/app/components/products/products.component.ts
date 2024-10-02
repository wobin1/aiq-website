import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    // Wait for a short time after the route is activated to scroll
    this.activatedRoute.fragment.subscribe((fragment) => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);  // Adjust the timeout as needed to allow the page to load
      }
    });
  }

  route(page: string, fragment: string) {
    // Navigate to the specified page and fragment
    this.router.navigate([`/${page}`], { fragment });
  }
}
