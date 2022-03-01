import { Component, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

declare const GLOBALS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AppComponent {
  title = 'frogginaround';
  public readonly menu = GLOBALS.menus.navigation;
}
