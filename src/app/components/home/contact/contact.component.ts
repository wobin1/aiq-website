import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  constructor(private router: Router){}

  route(){
    this.router.navigateByUrl('contact-us')
  }

}
