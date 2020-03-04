import { Injectable } from '@angular/core';
import userData from '../../assets/user.json';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Users: any = userData;
  private isUser: boolean;
  private hasPass: boolean;

  constructor(private router: Router) { }

  public showAll() {
    console.warn(this.Users);
  }

  public login(value: any) {
    this.isUser = false;
    this.hasPass = false;
    let name;
    // Find user from list
    this.Users.forEach((el) => {
      if (!this.isUser) { // If user not found yet
        if (el.username === value.username) {
          this.isUser = true;
          name = el.name;
          this.hasPass = (el.password === value.password); // Check password
        }
      }
    });
    if (this.isUser && !this.hasPass) {
      return 'Invalid Password';
    } else if (this.isUser && this.hasPass) {
      this.setLogin(value, name);
    } else {
      return 'Username not found';
    }
  }

  private setLogin(value: any, name) {
    localStorage.setItem('login', CryptoJS.AES.encrypt(JSON.stringify(value).trim(), 'toast'));
    this.router.navigateByUrl('/tracker');
  }

  checkLogin() {
    try {
      const x = JSON.parse(localStorage.getItem('login'));
    } catch (e) {
      this.router.navigateByUrl('/login');
    }
  }

}
