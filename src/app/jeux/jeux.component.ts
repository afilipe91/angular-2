import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from '../json-service.service';


@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  games;
  constructor(private JsonService:JsonServiceService) { }

  ngOnInit() {
    this.games = this.JsonService.getGames();
  }

}
