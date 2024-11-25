import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentYear = new Date().getFullYear();
  appName = 'Geles y Bebidas Energéticas';
  ngOnInit() {
    localStorage.setItem('premium', 'OK');
  }
}
