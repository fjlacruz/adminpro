import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linKTheme = document.querySelector('#theme');

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linKTheme.setAttribute('href', url);
    // href="./assets/css/colors/purple-dark.css" 

  }
  changeTheme(theme: string) {
    // console.log(theme);
    const url = `./assets/css/colors/${theme}.css`;
    this.linKTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }
  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    //console.log(links);
    links.forEach(elem => {

      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linKTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working');
      }

    })

  }
}
