import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {JsonServiceService} from "./json-service.service";
import { JeuxComponent } from './jeux/jeux.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JeuxComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  ],
  providers: [JsonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
