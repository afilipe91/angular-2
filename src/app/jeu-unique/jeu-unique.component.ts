import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from "../json-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jeu-unique',
  templateUrl: './jeu-unique.component.html',
  styleUrls: ['./jeu-unique.component.css']
})
export class JeuUniqueComponent implements OnInit {

  games;
  nom: string;
  constructor(private JsonService:JsonServiceService, private route:ActivatedRoute) {
    this.nom = route.snapshot.params['nom'];
  }

  ngOnInit() {
    this.games = this.JsonService.getGames();
  }
  getActive(){
    for (var i = 0; i < this.games.length; i++) {
       if (this.games.name == this.nom){
         this.games=[this.games[i]]
       }
    }
  }
}
