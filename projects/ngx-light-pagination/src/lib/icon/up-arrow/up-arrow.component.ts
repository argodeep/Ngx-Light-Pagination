import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'up-arrow',
  templateUrl: './up-arrow.component.html',
  styles: []
})
export class UpArrowComponent implements OnInit {
  @Input() color: string;
  @Input() icon: object;
  constructor() { }

  ngOnInit() {
  }

}
