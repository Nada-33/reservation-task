import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.css']
})
export class WeekdaysComponent {
  daysOfWeek: string[] = ['Saturday', 'Sunday' , 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  isDayRowOpen: boolean[] = new Array(7).fill(false); // Initialize all days as closed (false)
  isStartDropdownOpen: boolean[] = new Array(7).fill(false); // Initialize all days as closed (false)
  isEndDropdownOpen: boolean[] = new Array(7).fill(false); // Initialize all days as closed (false)
  selectedStartTimes: number[] = new Array(7).fill(0);
  selectedStartHours: number[] = new Array(7).fill(0);
  selectedStartMinutes: number[] = new Array(7).fill(0);
  selectedEndTimes: number[] = new Array(7).fill(0);
  selectedEndHours: number[] = new Array(7).fill(0);
  selectedEndMinutes: number[] = new Array(7).fill(0);
  hours: number[] = Array.from({ length: 24 }, (_, i) => i); // Array of hours from 0 to 23
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i); // Array of minutes from 0 to 59
  rows: any[] = []; 
  isChecked:boolean=false;
  constructor(private stateService: StateService) {
    this.rows = this.daysOfWeek.map(() => []);
  }
  toggleRowDeletion(index: number) {
    this.rows[index].isDeleting = !this.rows[index].isDeleting;
  }
  toggleDropdown(type: 'start' | 'end', i: number): void {
    // Close all dropdowns
    this.isStartDropdownOpen = this.isStartDropdownOpen.map(() => false);
    this.isEndDropdownOpen = this.isEndDropdownOpen.map(() => false);
  
    // Open the dropdown for the specified type and i
    if (type === 'start') {
      this.isStartDropdownOpen[i] = true;
    } else if (type === 'end') {
      this.isEndDropdownOpen[i] = true;
    }
  }
  saveStartSelectedDate(selectedStartHours: number, selectedStartMinutes: number,dayIndex:string) {
    // Calculate the total minutes
    const totalMinutes = (selectedStartHours * 60) + selectedStartMinutes;
    
    // Do something with the totalMinutes, like saving it to your data model or sending it to an API.
    
   this.stateService.addItem(`start: ${selectedStartHours} hours and ${selectedStartMinutes} minutes and day is ${dayIndex}`);
}
  saveEndSelectedDate(selectedEndHours: number, selectedEndMinutes: number,dayIndex:string) {
    // Calculate the total minutes
    const totalMinutes = (selectedEndHours * 60) + selectedEndMinutes;
    
    // Do something with the totalMinutes, like saving it to your data model or sending it to an API.
    
    this.stateService.addItem(`End: ${selectedEndHours} hours and ${selectedEndMinutes} minutes and day is ${dayIndex}` );
}

getCurrentTime(dayIndex:string, timeType: string) {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  if (timeType === 'start') {
    this.stateService.addItem(`Current start time: ${currentHours} hours and ${currentMinutes} minutes and day is ${dayIndex}`);

} else if (timeType === 'end') {
  this.stateService.addItem(`Current end time: ${currentHours} hours and ${currentMinutes} minutes and day is ${dayIndex}`);
}
  }
}
