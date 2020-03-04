import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activetab = 'home';

  constructor() { }

  ngOnInit() {
  }

  getActiveTab(tabname: string){
    this.activetab = tabname;
  }
}
