// import { Component } from '@angular/core';
// import { ButtonComponent } from '../button/button.component';

// @Component({
//   selector: 'tw-header',
//   standalone: true,
//   imports: [ButtonComponent],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css',
// })
// export class HeaderComponent {}

import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

interface NavLink {
  label: string;
  url: string;
  position: 'left' | 'right' | string;
  visible: boolean;
}

interface Brand {
  name: string;
  logo?: string;
  icon?: string;
}

interface Profile {
  name: string;
  img?: string;
  icon?: string;
  position: 'left' | 'right' | string;
  visible: boolean;
  loginURL: string;
  signupURL: string;
  logoutFn?: () => void;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnChanges {
  @Input() brand: Brand = {
    name: 'Brand',
    logo: 'material-symbols:logo-dev-outline',
  };
  @Input() navLinks: NavLink[] = [];
  @Input() profile: Profile = {
    name: 'Name',
    icon: 'gg:profile',
    position: 'right',
    visible: true,
    loginURL: '#',
    signupURL: '#',
  };
  @Input() variant: string = 'dark';

  leftNavLinks: NavLink[] = [];
  rightNavLinks: NavLink[] = [];
  showMobileNav: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['navLinks']) {
      this.leftNavLinks = this.navLinks.filter(
        (link) => link.position === 'left',
      );
      this.rightNavLinks = this.navLinks.filter(
        (link) => link.position === 'right',
      );
    }
  }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }
}
