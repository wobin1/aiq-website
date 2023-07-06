import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    navItems = [
        { path: '/about-us', label: 'Analytics',  },
        { path: '/capabilities', label: 'Members',  },
       
        
      ];

  ngOnInit(): void {
  }

}
