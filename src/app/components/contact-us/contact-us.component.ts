import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private router: Router){}

  route(){
    this.router.navigate(['/home']); // Navigate to About Component when the 'Contact Us' button is clicked.
  }

}
