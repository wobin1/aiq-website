import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router){}

  route(page:string){
    console.log('button clicked')
    this.router.navigateByUrl(page)
  }

  click(){
    console.log('click')
  }


}
