import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Country } from '../country';
import { CountryService } from '../country.service';
import { FileService } from '../file.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesComponent implements OnInit {
  countries: Array<Country> = [];
  page: number = 1;
  total: number;
  loading: boolean;
  isSearch: boolean;

  constructor(
    private countryService: CountryService,
    public messageService: MessageService,
    private excelService: FileService
  ) {}

  ngOnInit() {
    this.getCountries();
  }

  // getPage(page: 1){
  //   this.loading = true;
  //   this.countryService.getCountries().subscribe((countries) => {
  //     this.countries = countries;
  //     this.isSearch = this.messageService.operation === 'search';
  //   });
  // }

  getCountries(): void {
    this.messageService.setPage(1);
    this.countryService.getCountries().subscribe((countries) => {
      this.countries = countries;
      this.isSearch = this.messageService.operation === 'search';
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
