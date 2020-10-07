import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { FileService } from '../file.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-flag-popup',
  templateUrl: './flag-popup.component.html',
  styleUrls: ['./flag-popup.component.scss'],
})
export class FlagPopupComponent implements OnInit {
  @Input() country: Country;

  constructor(
    private fileService: FileService,
    public messageService: MessageService,
    public countryService: CountryService
  ) {}

  ngOnInit(): void {}

  close() {
    this.messageService.setShowPopUp(false);
  }

  downloadSVG(url, demonym) {
    this.fileService.saveImageSVG(url, `bandeira_${demonym}`);
  }
}
