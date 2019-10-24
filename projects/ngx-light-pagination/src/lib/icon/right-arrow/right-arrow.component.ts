import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'right-arrow',
  templateUrl: './right-arrow.component.html',
  styles: []
})
export class RightArrowComponent implements OnInit {
  @Input() color: string;
  @Input() icon: object;
  constructor() { }

  ngOnInit() {
  }

}
