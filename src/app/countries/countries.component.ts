import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { FileService } from '../file.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Array<Country> = [];
  isSearch: boolean;

  constructor(
    private countryService: CountryService,
    public messageService: MessageService,
    private excelService: FileService
  ) {}

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

  /**
   * downloadXLSX
   */
  downloadXLSX(): void {
    this.excelService.exportAsXLSXFile(this.countries, 'paises_xlsx');
  }

  /**
   * downloadXLSX
   */
  downloadXLS(): void {
    this.excelService.exportAsXLSFile(this.countries, 'paises_xls');
  }

  /**
   * downloadCSV
   */
  downloadCSV(): void {
    this.excelService.exportAsCSVFile(this.countries, 'paises_CSV');
  }
}
