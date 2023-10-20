import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  private resource: any[] = [];
  constructor() { }

  getItems(): (string | number)[] {
    return this.resource;
  }

  addItem(item: any) {
    console.log('Adding item:', item);
    this.resource.push(item);
    console.log('Resource array:', this.resource);
  }

  removeItem() {
    this.resource = []
  }
}