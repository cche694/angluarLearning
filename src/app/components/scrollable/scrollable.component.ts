import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

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
export class ScrollableComponent implements OnInit, OnChanges {
  ngOnChanges(props: SimpleChanges): void {
    console.log(props);
    const { backgroundColor } = props;
    console.log('change bgcolor', backgroundColor.currentValue);
  }
  
  ngDoCheck():void {
    console.log('脏检测');
  }

  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Output() menuClick = new EventEmitter();
  ngOnInit() {}
  

  title = 'ping duo duo';
  selectedIndex = -1;
  add: AddFunc = (x, y) => x + y;
  handleMenuClick: Function = (i: number) => {
    this.selectedIndex = i;
    this.menuClick.emit(this.menus[this.selectedIndex]);
  };
}
