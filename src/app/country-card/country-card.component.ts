import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { FileService } from '../file.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor(
    private messageService: MessageService,
    private countryService: CountryService,
    private excelService: FileService
  ) {}

  ngOnInit(): void {}

  openPopup(): void {
    this.countryService.setCountry(this.country);
    this.messageService.setShowPopUp(true);
  }

  /**
   * downloadXLSX
   */
  downloadXLSX(): void {
    this.excelService.exportAsXLSXFile([this.country], `${this.country.name}_xlsx`);
  }

  /**
   * downloadXLSX
   */
  downloadXLS(): void {
    this.excelService.exportAsXLSFile([this.country], `${this.country.name}_xls`);
  }

  /**
   * downloadCSV
   */
  downloadCSV(): void {
    this.excelService.exportAsCSVFile([this.country], `${this.country.name}_CSV`);
  }

  /**
   * downloadXML
   */
  downloadXML(): void {
    this.excelService.exportAsXMLFile([this.country], `${this.country.name}_XML`);
  }
}
