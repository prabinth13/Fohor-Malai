import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.team = this.getSystem();
  }
  getSystem() {
    return this.config.getConfig().team;
  }
}
