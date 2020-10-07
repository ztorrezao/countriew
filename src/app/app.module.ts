import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {
  List,
  Search,
  Download,
  ChevronDown,
  Grid,
  Table,
  Flag,
  Grid3x2,
  X,
  Outlet
} from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { AboutComponent } from './about/about.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SquareKilometerPipe } from './square-kilometer.pipe';

const icons = {
  List,
  Search,
  Download,
  ChevronDown,
  Grid,
  Table,
  Flag,
  Grid3x2,
  X
};

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    CountryCardComponent,
    AboutComponent,
    SearchBarComponent,
    SquareKilometerPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
