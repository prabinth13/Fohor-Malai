import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  activetab = 'home';

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  getActiveTab(tabname: string){
    this.activetab = tabname;
  }

  logout(){
    this.auth.logout();
  }

}
