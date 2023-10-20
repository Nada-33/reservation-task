import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isActive = true;
  userData: any;
  inputValue: string = '';
  selectedOption: string = '';
  newResource: string | number = '';
  constructor(public stateService: StateService) { }

  toggleButton() {
    this.isActive = !this.isActive;
  }
  displayData() {
    const data = this.stateService.getItems();
    alert(JSON.stringify(data));
  }
  deleteData(){
    this.stateService.removeItem()
  }
  
}
