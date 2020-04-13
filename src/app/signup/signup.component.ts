import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup;


  constructor(private fb: FormBuilder, 
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        'fullName': [null, Validators.required],
        'email' : [null, [Validators.required, Validators.email]],
        'password' : [null, Validators.required]
      }
    );
  }

  signup(formData: NgForm) {
    return this.auth.signup(formData).subscribe(
      (user) => {
        console.log(`Added User ${JSON.stringify(user)}`);
        this.router.navigate(['login']);
    });
} 
}