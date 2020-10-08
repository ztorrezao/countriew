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
  isTableView: boolean = false;

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

  setIsTableView(isTableView: boolean) {
    this.isTableView = isTableView;
  }

  getPage(): number {
    return this.page;
  }

  setPage(page: number) {
    this.page = page;
  }
}
