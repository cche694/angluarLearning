import { TopMenu } from './components/scrollable/scrollable.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    console.log(menu);
  }
}
