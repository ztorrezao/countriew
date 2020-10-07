import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Array<Country> = [];
  isSearch: boolean;

  constructor(private countryService: CountryService, public messageService: MessageService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.isSearch = this.messageService.operation === 'search';
      console.log(this.messageService.operation);
    });
  }
}
