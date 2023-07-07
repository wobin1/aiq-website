import { Component,  } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    navItems = [
        { path: '/', label: 'Home',  },
        { path: '/about-us', label: 'Who we are',  },
        { path: '/capabilities', label: 'What we do',  },
        { path: '/contact-us', label: 'Join Us',  },
      ];
     
      showList: boolean = false;

      onShowList = () => {
        this.showList = !this.showList;
      };

      closeShowList = () => {
        this.showList = false;
      }
    
}
