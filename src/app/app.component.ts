import { TopMenu } from './components/scrollable/scrollable.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topMenuBackGroundColor = '#eee';
  topMenu: TopMenu[] = [
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
    {
      title: '热门',
      link: '',
    },
  ];
  handleMenuClick(menu: TopMenu) {
    const colorArray = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.topMenuBackGroundColor = colorArray[idx];
    console.log(menu);
  }
}
