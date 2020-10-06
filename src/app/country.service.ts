import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countriesURL = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  // GET countries form the api
  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.countriesURL}/all`);
  }
  // getCountries(): Observable<Country[]> {
  //   return this.http.get<Country[]>(`${this.countriesURL}/all`);
  // }
}
