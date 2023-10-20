import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {
  isDropdownOpen: boolean = false;
  inputValue: string = '';
  selectedMonth: number = 0;
  selectedOption: string = '';
  fixedTime: string = '2';
  minutes: number = 0;
  quantity: number = 0;
  multiQuantity: number = 0;
  selectedMultiOption: string = '4';


  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);


  constructor(private stateService: StateService) { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectMonth(month: number) {
    this.selectedMonth = month;
    this.isDropdownOpen = false;
    this.stateService.addItem(`selected month is ${this.selectedMonth}`);
  }
  incrementValue() {
    this.quantity++;

  }

  decrementValue() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  selecteMints() {
      this.stateService.addItem(`the quantity is ${this.quantity}`);
  }

  incrementMultiValue() {
    this.multiQuantity++;
  }
  decrementMultiValue() {
    if (this.multiQuantity > 0) {
      this.multiQuantity--;
    }
  }
  selecteDates() {
    console.log("hiiiii");
    this.stateService.addItem(`multiquatntiy ${this.multiQuantity}`);
  }

}

