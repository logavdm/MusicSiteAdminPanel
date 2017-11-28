import { Component, OnInit,Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import {AppState} from "../app-state/app-state";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-AddMovie',
  templateUrl: './AddMovie.component.html',
  styleUrls: ['./AddMovie.component.css'],  

})
export class AddMovieComponent implements OnInit {
  @select() readonly imageList:Observable<boolean>;
  movieName:string;

  constructor(private ngRedux: NgRedux<AppState>) { 
    
    this.imageList.subscribe(data=>{
      console.log(data);
    });
    
  }

  ngOnInit() {
  }

}
