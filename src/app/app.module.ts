import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import {AddmovieComponent} from "./addmovie/addmovie.component";
import { ListmoviesComponent } from './listmovies/listmovies.component';
import {DeletemovieComponent} from "./deletemovie/deletemovie.component";
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { AddactortomovieComponent } from './addactortomovie/addactortomovie.component';
import { GetagePipe } from './getage.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "addactortomovie", component: AddactortomovieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "**", component: ViewnotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    ListmoviesComponent,
    DeletemovieComponent,
    ViewnotfoundComponent,
    AddactortomovieComponent,
    GetagePipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
