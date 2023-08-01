import { Component,  } from '@angular/core';

@Component({
  selector: 'navigation-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    navItems = [
        { path: '/home', label: 'Home',  },
        { path: '/about-us', label: 'Who are we?',  },
        { path: '/capabilities', label: 'What do we do?',  },
        { path: '/join-us', label: 'Join Us',  },
      ];
     
      showList: boolean = false;

      onShowList = () => {
        this.showList = !this.showList;
      };

      closeShowList = () => {
        this.showList = false;
      }
    
}
