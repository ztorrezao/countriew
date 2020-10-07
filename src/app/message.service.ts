import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string;
  status: number;
  operation: string;
  term: string;

  setMessage( message: string) {
    this.message = message;
  }

  setStatus( status: number) {
    this.status = status;
  }

  setOperation( operation: string) {
    this.operation = operation;
  }

  setTerm( term: string) {
    this.term = term;
  }
}
