import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  submit() {
    window.open('https://docs.google.com/forms/d/1l6qgyncMYDI6llD8lvct2Wz7kJjrU0rOJ5y5Aic3PPA/viewform?edit_requested=true', '_blank');
  }

}
