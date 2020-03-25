import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.contact = this.getSystem();
  }
  getSystem() {
    return this.config.getConfig().contact;
  }
}
