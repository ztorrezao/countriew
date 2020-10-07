import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor(private messageService: MessageService, private countryService: CountryService) { }

  ngOnInit(): void {
  }

  openPopup(): void{
    this.countryService.setCountry(this.country);
    this.messageService.setShowPopUp(true);
  }
}
