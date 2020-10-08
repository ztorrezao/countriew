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
  page: number = 1;
  total: number;
  loading: boolean;
  isSearch: boolean;
  isTableView: boolean = false;
  constructor(
    private countryService: CountryService,
    public messageService: MessageService,
    private excelService: FileService
  ) {}

  ngOnInit() {
    this.getCountries();
    // this.getTableView();
  }

  // getTableView(){
  //   this.isTableView = this.messageService.isTableView;
  // }

  setTableView(isTableView: boolean) {
    this.isTableView = isTableView;
  }

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

  /**
   * downloadXML
   */
  downloadXML(): void {
    this.excelService.exportAsXMLFile(this.countries, 'paises_XML');
  }

  // ============== single country

  openPopup(country: Country): void {
    this.countryService.setCountry(country);
    this.messageService.setShowPopUp(true);
  }

  /**
   * downloadXLSX
   */
  downloadCountryXLSX(country: Country): void {
    this.excelService.exportAsXLSXFile([country], `${country.name}_xlsx`);
  }

  /**
   * downloadCountryXLSX
   */
  downloadCountryXLS(country: Country): void {
    this.excelService.exportAsXLSFile([country], `${country.name}_xls`);
  }

  /**
   * downloadCountryCSV
   */
  downloadCountryCSV(country: Country): void {
    this.excelService.exportAsCSVFile([country], `${country.name}_CSV`);
  }

  /**
   * downloadXML
   */
  downloadCountryXML(country: Country): void {
    this.excelService.exportAsXMLFile([country], `${country.name}_XML`);
  }
}
