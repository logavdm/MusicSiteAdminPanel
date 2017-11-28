import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Image } from "../models/image";
import { ImageModel } from "../models/image-model";
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { NgRedux, select } from '@angular-redux/store';
import {AppState} from "../app-state/app-state";
import {AddImageListToModel} from "../actions/models/add-image-list-to-model";
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Injectable()
export class HttpServicesService {

  @select() readonly currentImageList:Observable<Image[]>;
  @select() readonly imageListWithKey:Observable<ImageModel[]>;
  constructor(private http: HttpClient,private ngRedux: NgRedux<AppState>,private slimLoader: SlimLoadingBarService) {

  }

  getMovieImages(movie_name: string) {  
      this.slimLoader.start();
      let params = new HttpParams().set('movie', movie_name);
      console.log(movie_name);
      this.http.get<Image[]>("http://localhost:8080/getImages", { params: params }).toPromise().then(res=>{  
        console.log(res);
        this.ngRedux.dispatch({type:'ADDIMAGELISTTOIMAGEMODEL',key:movie_name,listImages:res}as AddImageListToModel);
        this.slimLoader.complete();
      });       
  }

  public returnMovie(index:number){
    //return this.imagelist[index].imageList;
  }

  public AddImagesList(data: Image[], key: string) {
    // let temp: ImageModel = { key: key, imageList: data };
    // if (this.imagelist.length >= 10) {
    //   this.imagelist.splice(0, 1);
    //   this.imagelist.push(temp);
    // } else {
    //   this.imagelist.push(temp);
    // }
    // return true;

  }

  

}
