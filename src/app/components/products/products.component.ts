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

  ngOnInit(){
    // Scroll to fragment when the page loads
    this.activatedRoute.fragment.subscribe((fragment:any) => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  route(page:string, fragment:string){
    this.router.navigate(['/products']);
  }

}
