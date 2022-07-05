import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}
interface AddFunc {
  (x: number, y: number): number;
}

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.css'],
})
export class ScrollableComponent {
  @Input() menus: TopMenu[] = [];
  @Output() menuClick= new EventEmitter ()
  title = 'ping duo duo';
  selectedIndex = -1;
  add: AddFunc = (x, y) => x + y;
  handleMenuClick: Function = (i: number) => {
    this.selectedIndex = i;
    this.menuClick.emit(this.menus[this.selectedIndex])
  };
}
