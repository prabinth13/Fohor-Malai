import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  private error: string;

  constructor( private titleService: Title, private loginService: LoginService) {
    this.titleService.setTitle('UserDash | Login');
  }

  ngOnInit() {
  }

  onSubmit() {
    this.error = this.loginService.login(this.loginForm.value);
  }
}
