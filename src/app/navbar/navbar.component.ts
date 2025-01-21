import { Component, inject } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
//services
themeService = inject(ThemeService);

//Para el theme:
isDarkMode = false;
constructor() {
  this.themeService.isDarkMode$.subscribe(
    (isDark) => (this.isDarkMode = isDark)
  );
}
toggleTheme() {
  this.themeService.toggleTheme();
}

}
