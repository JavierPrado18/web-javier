import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this._isDarkMode.asObservable();

  constructor() {
    // Verificar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    this.setTheme(savedTheme === 'dark');
  }

  setTheme(isDark: boolean) {
    this._isDarkMode.next(isDark);
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  toggleTheme() {
    this.setTheme(!this._isDarkMode.value);
  }
}