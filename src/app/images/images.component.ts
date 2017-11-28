import { Component, OnInit,Input,HostListener } from '@angular/core';
import {HttpServicesService} from '../services/http-services.service';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import { HttpClient,HttpParams  } from '@angular/common/http';
import {Image} from "../models/image";
import {ImageModel} from "../models/image-model";
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import {AppState} from "../app-state/app-state";
import {GetImageListAction} from "../actions/models/get-image-list-action";


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],

})
export class ImagesComponent implements OnInit {

  @Input() searchQuery:string;
  @select() readonly currentImageList:Observable<Image[]>;
  @select() readonly imageListWithKey:Observable<ImageModel[]>;

  imageList:Image[];
  imageListAndKey:ImageModel[];

  constructor(private http: HttpServicesService,private ngRedux: NgRedux<AppState>) {
   
   }

   
   SearchMovie(){    
    if(this.searchQuery!="" && this.searchQuery!=undefined){
      let index=this.imageListAndKey.findIndex(data=>this.searchQuery==data.key);
      console.log(index);
      if(index >=0 && index<this.imageListAndKey.length){
        this.ngRedux.dispatch({type:'GETIMAGELISTFROMMODEL',index:index} as GetImageListAction );
      }else{
        console.log("http call:"+this.searchQuery);
        this.http.getMovieImages(this.searchQuery);
      }
    }
    else{
      console.log("search string empty")
    }
    
   }
  
   @HostListener('change') ngOnChanges() {
     console.log("Input response received");
      this.SearchMovie();
    } 

    submitButton(){

    }
   

  ngOnInit() {

    this.currentImageList.subscribe(data=>{
      this.imageList=data;
    });

    this.imageListWithKey.subscribe(data=>{
      this.imageListAndKey=data;
    });

  }

}
