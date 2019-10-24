import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'down-arrow',
  templateUrl: './down-arrow.component.html',
  styles: []
})
export class DownArrowComponent implements OnInit {
  @Input() color: string;
  @Input() icon: object;
  constructor() { }

  ngOnInit() {
  }

}
