import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  appName = 'Geles y Bebidas Energéticas';
  ngOnInit() {
    if (isDevMode()) {
      localStorage.setItem('premium', 'OK');
    }
  }
}
