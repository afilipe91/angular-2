import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from "../json-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  games;
  constructor(private JsonService:JsonServiceService) { }

  ngOnInit() {
    this.games = this.JsonService.getGames();
  }

}
