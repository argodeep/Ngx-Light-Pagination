import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themeColor: string = '#260F4A';
  paginationMeta = {
    perPageItem: 5,
    totalItem: 50,
    currentPage: 3,
    totalPage: 10,
  };
  paginationEvent: object = {};

  logicHandler(): void {
    if (this.paginationMeta.perPageItem > this.paginationMeta.totalItem) {
      this.paginationMeta.perPageItem = this.paginationMeta.totalItem;
    }
    this.paginationMeta.totalPage = Math.ceil(this.paginationMeta.totalItem / this.paginationMeta.perPageItem);
    const value = Math.floor(Math.random() * Math.floor(this.paginationMeta.totalPage));
    this.paginationMeta.currentPage = value === 0 ? 1 : value;
  }

  paginationEvents(event) {
    this.paginationEvent = event;
  }
}
