import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxLightPaginationModule } from 'ngx-light-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxLightPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
