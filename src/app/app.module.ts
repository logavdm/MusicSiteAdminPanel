import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './AddMovie/AddMovie.component';
import { MovieListComponent } from './MovieList/MovieList.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
