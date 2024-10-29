import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from '../../projects/theme/src/lib/components/spinner/spinner.component';
import { ThemeComponent } from '../../projects/theme/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-storybook';

  widgets = {
    size: 'medium',
    data: [
      { label: 'High Priority', value: 10, color: 'primary' },
      { label: 'High Priority', value: 10, color: 'danger' },
      { label: 'High Priority', value: 10, color: 'secondary' },
      { label: 'High Priority', value: 10, color: 'info' },
      { label: 'High Priority', value: 10, color: 'warning' },
      { label: 'High Priority', value: 10, color: 'success' },
    ],
  };

  onClickBtn() {
    alert('Btn clicked');
  }
}
