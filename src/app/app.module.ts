import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {
  List,
  Search,
  Download,
  ChevronDown,
  Grid,
  Table,
  Flag,
  Grid3x2
} from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { AboutComponent } from './about/about.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const icons = {
  List,
  Search,
  Download,
  ChevronDown,
  Grid,
  Table,
  Flag,
  Grid3x2
};

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CountriesComponent,
    CountryComponent,
    CountryCardComponent,
    AboutComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
