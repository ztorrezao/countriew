import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';


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
  X
} from 'ngx-bootstrap-icons';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryCardComponent } from './country-card/country-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SquareKilometerPipe } from './square-kilometer.pipe';
import { FlagPopupComponent } from './flag-popup/flag-popup.component';

import { AppRoutingModule } from './app-routing.module';

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
    CountryCardComponent,
    SearchBarComponent,
    SquareKilometerPipe,
    FlagPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
