import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from './services/theme/theme-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  private readonly themeService = inject(ThemeService);

  constructor() { }

  ngOnInit(): void {
    this.themeService.loadSavedTheme();
  }
}
