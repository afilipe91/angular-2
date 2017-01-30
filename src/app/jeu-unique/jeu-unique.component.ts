import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from "../json-service.service";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-jeu-unique',
  templateUrl: './jeu-unique.component.html',
  styleUrls: ['./jeu-unique.component.css']
})
export class JeuUniqueComponent implements OnInit {

  games;
  nom: string;
  constructor(private JsonService:JsonServiceService, private route:ActivatedRoute, private location: Location) {
    this.nom = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.games = this.JsonService.getGames();

  }
  goBack(): void {
    this.location.back();
  }

}
