import { Component } from '@angular/core';
import { TextDirectionService } from './services/text-direction.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskpj';
  isRtlLanguage: boolean = true;

  constructor(public textDirectionService: TextDirectionService) {}
  ngOnInit() {
    const initialLanguage = this.textDirectionService.isRtl ? 'ar' : 'en';
    this.textDirectionService.setLanguage(initialLanguage);
  }
}
