import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string;
  status: number;
  operation: string;
  term: string;
  isOpen: boolean;
  page: number = 1;

  setMessage(message: string) {
    this.message = message;
  }

  setStatus(status: number) {
    this.status = status;
  }

  setOperation(operation: string) {
    this.operation = operation;
  }

  setTerm(term: string) {
    this.term = term;
  }

  setShowPopUp(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  getPage() : number {
    return this.page;
  }

  setPage(page: number) {
    this.page = page;
  }
}
