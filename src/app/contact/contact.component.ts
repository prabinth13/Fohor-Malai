import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = {}


  contactusForm: FormGroup;


  constructor(private fb: FormBuilder, private config: ConfigService) { }

  ngOnInit() {
    this.contact = this.getSystem();


    this.contactusForm = this.fb.group(
      {
        'fullName' : [null, Validators.required],
        'email' : [null, [Validators.required, Validators.email]],
        'message' : [null, Validators.required]
      }
    );
  }

  sendMessage(formData: NgForm) {
    console.log(formData);
  }

  getSystem() {
    return this.config.getConfig().contact;
  }
}
