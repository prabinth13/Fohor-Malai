import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  system = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.system = this.getSystem();
  }
  getSystem() {
    return this.config.getConfig().system;
  }
}
