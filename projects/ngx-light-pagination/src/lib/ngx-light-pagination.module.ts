import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxLightPaginationComponent } from './ngx-light-pagination.component';
import { UpArrowComponent } from './icon/up-arrow/up-arrow.component';
import { DownArrowComponent } from './icon/down-arrow/down-arrow.component';
import { RightArrowComponent } from './icon/right-arrow/right-arrow.component';
import { LeftArrowComponent } from './icon/left-arrow/left-arrow.component';
// import { OutsideDirective } from './outside.directive';



@NgModule({
  declarations: [
    NgxLightPaginationComponent, 
    // OutsideDirective,
    UpArrowComponent, 
    DownArrowComponent, 
    RightArrowComponent, 
    LeftArrowComponent
  ],
  imports: [
    CommonModule
    // BrowserModule
  ],
  exports: [NgxLightPaginationComponent],
})
export class NgxLightPaginationModule { }
