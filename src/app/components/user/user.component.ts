import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username: string = '';
  imageUrl: string = '../../../assets/images/p5.jpeg';
  selectedFile: File | null = null; // To store the selected file
  constructor(private stateService: StateService) { }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;

        // Split the URL to extract the file name
        const parts = this.imageUrl.split('/');
        const fileName = parts[parts.length - 1];
        this.stateService.addItem(fileName);
        console.log(fileName);
        
      };
      reader.readAsDataURL(file);
    }
  }

  openFileInput() {
    // Trigger the file input element when the button is clicked
    document.getElementById('fileInput')?.click();
  }
  setUsername() {

    this.stateService.addItem(`username is ${this.username}`);
    console.log(this.username);
  }

}


