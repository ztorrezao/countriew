import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country } from './country';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countriesURL: string = 'https://restcountries.eu/rest/v2';
  private requestFilters: string = '?fields=name;nativeName;capital;region;subregion;population;demonym;area;flag;timezones';


  private country: Country = {
    name: '',
    nativeName: '',
    capital: '',
    region: '',
    subregion: '',
    population: 0,
    demonym: '',
    area: 0,
    flag: '',
    timezones: '',
  };
  private countries: Observable<Country[]>;
  private countriesSource = new Subject<Country[]>();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.countries = this.countriesSource.asObservable();
    this.indexAllCountries();
  }

  // handle fetching errors
  private handleError<T>(message = 'operation', status: number, result?: T) {
    return (error: any): Observable<T> => {
      // TODO: Send error to console.log
      console.log(error);

      // TODO: Add error to show on the view
      console.log(message, status, this.messageService.message);

      return of(result as T);
    };
  }

  // fetch countries form the api
  indexAllCountries(): void {
    this.messageService.setOperation('all');
    this.http.get<Country[]>(`${this.countriesURL}/all${this.requestFilters}`).subscribe((data) => {
      this.countriesSource.next(data);
    });
  }

  // fetch countries by its the native name or partial name
  indexCountriesByName(term): void {
    this.messageService.setOperation('');
    this.messageService.setOperation('search');
    this.messageService.setTerm(term);
    this.http
      .get<Country[]>(`${this.countriesURL}/name/${term}${this.requestFilters}`)
      .pipe(catchError(this.handleError<Country[]>('search', 404, [])))
      .subscribe((data) => {
        this.countriesSource.next(data);
      });
  }

  getCountries(): Observable<Country[]> {
    return this.countries;
  }

  setCountry(country: Country){
    this.country = country;
  }

  getCountry(){
    return this.country;
  }
}
