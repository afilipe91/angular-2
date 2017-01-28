import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {JsonServiceService} from "./json-service.service";
import { JeuxComponent } from './jeux/jeux.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ng2-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { JeuUniqueComponent } from './jeu-unique/jeu-unique.component';
import {routing} from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuxComponent,
    HeaderComponent,
    FooterComponent,
    JeuUniqueComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    routing
  ],
  providers: [JsonServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
