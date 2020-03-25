import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.about = this.getSystem();
  }
  getSystem() {
    return this.config.getConfig().about;
  }
}
