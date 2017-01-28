import { Routes,RouterModule } from "@angular/router";
import { JeuxComponent } from "./jeux/jeux.component";
import {JeuUniqueComponent} from "./jeu-unique/jeu-unique.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const APP_ROUTES : Routes = [
    { path: '', component: DashboardComponent},
    { path: 'jeux', component: JeuxComponent},
    { path: 'jeux/:id', component: JeuUniqueComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);