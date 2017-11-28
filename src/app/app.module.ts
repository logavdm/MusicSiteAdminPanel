import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'; 
import { NgReduxModule }  from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './AddMovie/AddMovie.component';
import { MovieListComponent } from './MovieList/MovieList.component';
import { ImagesComponent } from './images/images.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpServicesService} from "./services/http-services.service";
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const routes: Routes = [  
  { path: '', component:MovieListComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movie', component: AddMovieComponent },
  { path: '**', component: MovieListComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent,
    ImagesComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
