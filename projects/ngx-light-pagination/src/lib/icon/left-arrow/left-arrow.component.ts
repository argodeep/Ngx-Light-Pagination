import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-arrow',
  templateUrl: './left-arrow.component.html',
  styles: []
})
export class LeftArrowComponent implements OnInit {
  @Input() color: string;
  @Input() icon: object;
  constructor() { }

  ngOnInit() {
  }

}
