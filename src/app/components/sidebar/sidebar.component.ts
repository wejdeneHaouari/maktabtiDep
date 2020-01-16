import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [

    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/list-book', title: 'Buy Books',  icon:'ni-key-25 text-info', class: '' },
    { path: '/exchange-book', title: 'put book to exchange',  icon:'ni ni-book-bookmark text-blue', class: '' },
    { path: '/my-exchanges', title: 'Exchanged books',  icon:'ni ni-books text-red', class: '' },
  { path: '/confirm-exchange', title: 'Confirm receive',  icon:'ni ni-delivery-fast text-pink', class: '' },
  { path: '/create-chapter', title: 'Create chapter',  icon:'ni ni-ruler-pencil text-green', class: '' },
  { path: '/list-chapter', title: 'List chapter',  icon:'ni ni-collection text-info', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  public menuItems: any[];
  public isCollapsed = true;

  openMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: true,
    sub3: true
  };

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  collapse(value: string) {

    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = true;
      } else {
        this.openMap[key] = !this.openMap[key];
      }
    }
  }
}
