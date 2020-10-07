import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Countriew';

  isMobileNavOpen: boolean = false;

  isSearchMode: boolean;

  openMobileNav() {
    this.isMobileNavOpen = true;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }

  checkSearchMode($event){
    this.isSearchMode = $event;
  }
}
