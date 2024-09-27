import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [HeroComponent, SearchComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  
}
