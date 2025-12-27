import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private themes: string[] = ['theme-green', 'theme-blue', 'theme-red'];
  constructor() { }

  setTheme(themeName: string) {
    document.body.classList.remove(...this.themes);

    if (themeName && themeName !== 'default') {
      const className = `theme-${themeName}`;
      document.body.classList.add(className);
    }

    localStorage.setItem('user-theme', themeName);
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('user-theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }
}
