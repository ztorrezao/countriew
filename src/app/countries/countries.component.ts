import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Array<Country> = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }
}
