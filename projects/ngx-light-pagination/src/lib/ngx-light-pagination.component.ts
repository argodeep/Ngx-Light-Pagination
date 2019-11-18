import { Component, OnInit, Input, Output, EventEmitter, ElementRef, KeyValueDiffers, SimpleChanges } from '@angular/core';
import { Pagination } from './pagination.model';

@Component({
  selector: 'ngx-light-pagination',
  templateUrl: './ngx-light-pagination.component.html',
  styleUrls: ['./ngx-light-pagination.component.scss']
})

export class NgxLightPaginationComponent implements OnInit {
  @Input() color: string;
  @Input() paginationData: Pagination;
  @Output() onPageChange = new EventEmitter();
  paginatedPages: number[] = [];
  // perPageOption: number[] = [];
  // dropdownOpened = false;
  differ: any;
  invertColorString: string = '#fff';

  constructor(private elRef: ElementRef, private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create();
  }

  ngOnInit() {
    if (this.color) {
      this.invertColorString = this.invertColor(this.color, true);
    }
    // this.setOption(this.paginationData.perPageItem)
    this.setPagination(this.paginationData)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      if (this.color.length === 4 || this.color.length === 7) {
        this.invertColorString = this.invertColor(this.color, true);
      }
    }
  }

  ngDoCheck() {
    let paginationChanges = this.differ.diff(this.paginationData);
    if (paginationChanges) {
      // this.setOption(this.paginationData.perPageItem)
      this.setPagination(this.paginationData)
    }
  }

  setPagination(paginationData): void {
    paginationData.paginationLength = Math.ceil(paginationData.totalItem / paginationData.perPageItem) > 5 ? 5 : Math.ceil(paginationData.totalItem / paginationData.perPageItem);
    const pages = [paginationData.currentPage];
    const pointer = Math.floor(paginationData.paginationLength / 2);
    const totalPage = paginationData.totalPage === Math.ceil(paginationData.totalItem / paginationData.perPageItem) ? paginationData.totalPage : Math.ceil(paginationData.totalItem / paginationData.perPageItem);
    let minBuffer, maxBuffer;
    if (totalPage - paginationData.currentPage < pointer) {
      minBuffer = (paginationData.paginationLength - 1) - (totalPage - paginationData.currentPage);
      maxBuffer = totalPage - paginationData.currentPage;
    } else if (totalPage - paginationData.currentPage >= pointer && paginationData.currentPage - 1 >= pointer) {
      minBuffer = paginationData.paginationLength - 1 - pointer;
      maxBuffer = paginationData.paginationLength - minBuffer - 1;
    } else if (paginationData.currentPage - 1 < pointer) {
      minBuffer = paginationData.currentPage - 1;
      maxBuffer = paginationData.paginationLength - minBuffer - 1;
    }

    for (let i = paginationData.currentPage - minBuffer; i <= paginationData.currentPage + maxBuffer; i++) {
      if (i > paginationData.currentPage && i <= paginationData.currentPage + maxBuffer) {
        pages.push(i);
      }
      if (i > 0 && i < paginationData.currentPage && i >= paginationData.currentPage - minBuffer) {
        pages.push(i);
      }
    }
    this.paginatedPages = [...pages.sort((a, b) => { return a - b; })];
  }

  // setOption(perPageItem) {
  //   this.perPageOption = [];
  //   const firstIndex = perPageItem;
  //   const secondIndex = perPageItem * 2;
  //   const thirdIndex = perPageItem * 3;
  //   if (firstIndex <= this.paginationData.totalItem) {
  //     this.perPageOption.push(firstIndex)
  //   }
  //   if (secondIndex <= this.paginationData.totalItem) {
  //     this.perPageOption.push(secondIndex)
  //   }
  //   if (thirdIndex <= this.paginationData.totalItem) {
  //     this.perPageOption.push(thirdIndex)
  //   }
  // }

  // hideDropdown() {
  //   this.dropdownOpened = false;
  //   setTimeout(e => {
  //     const block = this.elRef.nativeElement.querySelector('.dropdown-list-show');
  //     if (block) {
  //       block.classList.remove('dropdown-list-show');
  //       block.classList.add('dropdown-list');
  //     }
  //     const list = this.elRef.nativeElement.querySelector('.list-show');
  //     if (list) {
  //       list.classList.remove('list-show');
  //       list.classList.add('list')
  //     };
  //   }, 0);
  // }

  // showDropDown() {
  //   if (this.dropdownOpened === false) {
  //     this.dropdownOpened = true;
  //     const block = this.elRef.nativeElement.querySelector('.dropdown-list');
  //     if (block) {
  //       block.classList.remove('dropdown-list');
  //       block.classList.add('dropdown-list-show');
  //     }
  //     const list = this.elRef.nativeElement.querySelector('.list');
  //     if (list) {
  //       list.classList.remove('list');
  //       list.classList.add('list-show');
  //     };
  //   } else {
  //     this.hideDropdown();
  //   }
  // }

  invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    let r: any = parseInt(hex.slice(0, 2), 16),
      g: any = parseInt(hex.slice(2, 4), 16),
      b: any = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? '#000000'
        : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r, null) + this.padZero(g, null) + this.padZero(b, null);
  }

  padZero(str, len) {
    len = len || 2;
    let zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }


  previous() {
    if (this.paginationData.currentPage > 1) {
      this.paginationData.currentPage = this.paginationData.currentPage - 1;
      const event = {
        type: 'Previous Page',
        data: this.paginationData.currentPage
      }
      this.onPageChange.emit(event);
    }
  }

  next() {
    if (this.paginationData.currentPage - this.paginationData.totalPage < 0) {
      this.paginationData.currentPage = this.paginationData.currentPage + 1;
      const event = {
        type: 'Next Page',
        data: this.paginationData.currentPage
      }
      this.onPageChange.emit(event);
    }
  }

  changePage(index) {
    this.paginationData.currentPage = index;
    const event = {
      type: 'Page Select',
      data: index
    }
    this.onPageChange.emit(event);
  }
  // perPageChange(item) {
  //   this.paginationData.perPageItem = item;
  //   this.paginationData.totalPage = Math.ceil(this.paginationData.totalItem / this.paginationData.perPageItem);
  //   this.paginationData.currentPage = 1;
  //   this.setOption(this.paginationData.perPageItem)
  //   this.setPagination(this.paginationData)
  // }

}
