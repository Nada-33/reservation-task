import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ResourceTimeComponent } from './components/resource-time/resource-time.component';
import { ResourceReservationComponent } from './components/resource-reservation/resource-reservation.component';
import { WeekdaysComponent } from './components/weekdays/weekdays.component';
import { HeaderComponent } from './components/header/header.component';
import { ResourceComponent } from './components/resource/resource.component';
import { FormsModule } from '@angular/forms';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ResourceTimeComponent,
    ResourceReservationComponent,
    WeekdaysComponent,
    HeaderComponent,
    ResourceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      defaultLanguage: 'ar',
    }),
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
