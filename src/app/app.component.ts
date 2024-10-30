import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../projects/theme/src/lib/components/spinner/spinner.component';
import { ThemeComponent } from '../../projects/theme/src/public-api';
import { HeaderComponent } from '../../projects/theme/src/lib/components/header/header.component';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeComponent, SpinnerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-storybook';

  loggedin: boolean = true;

  brand = {
    name: 'MyBrand',
    icon: 'instagram',
  };

  navLinks = [
    { label: 'Home', url: '/home', position: 'right', visible: this.loggedin },
    { label: 'About', url: '/about', position: 'left', visible: this.loggedin },
    {
      label: 'Contact',
      url: '/contact',
      position: 'left',
      visible: this.loggedin,
    },
  ];

  profile = {
    name: 'John Doe',
    icon: 'user',
    position: 'right',
    visible: this.loggedin,
    loginURL: '/login',
    signupURL: '/signup',
    logoutFn: this.logout,
  };

  logout() {
    alert('LoggedOut');
  }

  ngAfterViewInit(): void {
    feather.replace(); // Replaces <i> tags with Feather icons
  }
}
