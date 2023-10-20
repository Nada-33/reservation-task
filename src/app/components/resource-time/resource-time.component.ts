import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-time',
  templateUrl: './resource-time.component.html',
  styleUrls: ['./resource-time.component.css']
})
export class ResourceTimeComponent {

}
// userData: any;
// constructor(private stateService: StateService) {
//   this.stateService.getUserData().subscribe((userData) => {
//     this.userData = userData;
//   });
// }
// saveData() {
//   this.stateService.setUserData(this.userData);
//   alert('Data saved successfully.');
//   this.displayUserData()
//   console.log(this.stateService.getUserData());
// }
// displayUserData() {
//   this.stateService.getUserData().subscribe({
//     next: (userData) => {
//       if (userData) {
//         alert('User Data: ' + JSON.stringify(userData));
//         console.log(userData);

//       } else {
//         alert('User Data is undefined.');
//       }
//     },
//     error: (error) => {
//       console.error('Error loading user data', error);
//       alert('Error loading user data.');
//     },
//   });
// }
// deleteData() {
//   this.userData = ''; // Clear the user data
//   this.stateService.clearUserData(); // Clear data in the store if your service supports it
//   alert('Data deleted.');
// }

// }
