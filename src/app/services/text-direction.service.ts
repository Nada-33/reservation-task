import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class TextDirectionService {
  //rigth to left and arbic language
  isRtl: boolean = true; 
  defaultLanguage: string = 'ar'; 
  constructor(private translate: TranslateService) {  
    this.translate.onLangChange.subscribe((event) => {
      this.isRtl = event.lang === 'ar'; // Update isRtl based on the language change
      document.documentElement.dir = this.isRtl ? 'rtl' : 'ltr';
    });
   }
   //set direction to rigth
   setDirection(isRtl:boolean){
    this.isRtl=isRtl;
    document.dir=isRtl?'rtl':'ltr';
    console.log(isRtl);
   }
   //set language 
   setLanguage(language:string){
    this.translate.use(language);
    console.log(language);
   }

}
