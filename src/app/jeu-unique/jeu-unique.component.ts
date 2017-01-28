import { Component, OnInit } from '@angular/core';
import {JeuxComponent} from "../jeux/jeux.component";

@Component({
  selector: 'app-jeu-unique',
  templateUrl: './jeu-unique.component.html',
  styleUrls: ['./jeu-unique.component.css']
})
export class JeuUniqueComponent implements OnInit {

  constructor(private JeuxComponent:JeuxComponent) { }

  ngOnInit() {
  }

}
