import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<boolean>();

  isSearchMode: boolean = false;
  isEmpty: boolean = true;

  constructor(private countryService: CountryService, public messageService: MessageService) {}

  ngOnInit(): void {}

  search(term: string): void {
    if (term) {
      this.countryService.indexCountriesByName(term);
      this.messageService.setPage(1);

    } else {
      this.isEmpty = true;
      this.countryService.indexAllCountries();
      this.messageService.setPage(1);

    }
  }

  enterSearchMode(): void {
    this.emitSearchEvent(true);
  }

  exitSearchMode(term: string): void {
    if (!term) {
      this.emitSearchEvent(false);
    }
  }

  emitSearchEvent(status: boolean): void {
    this.isSearchMode = status;
    this.searchEvent.emit(this.isSearchMode);
  }

  verifyEmpty(term): void {
    if (term) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }
}
