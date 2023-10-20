import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-resource-reservation',
  templateUrl: './resource-reservation.component.html',
  styleUrls: ['./resource-reservation.component.css']
})
export class ResourceReservationComponent {
  constructor(private stateService:StateService){}
  selectedProductTime!: string ;

  onProductTimeChange() {
    this.stateService.addItem(`elected Product Time${this.selectedProductTime}`);
    console.log(this.selectedProductTime);
  }
}
