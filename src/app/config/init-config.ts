import {AppState} from "../app-state/app-state";
import {Image} from "../models/image";
import { ImageModel } from "../models/image-model";

export interface InitConfig {
}
const image:Image={title:'demo',src:'http://sesd.com',height:'100',width:'100'};
const image1:Image={title:'demo1',src:'http://sesd.com1',height:'1001',width:'1001'};
const imageList:Image[]=[image];
const imageList1:Image[]=[image1];
const imageModel:ImageModel={key:'demoMovieName',imageList:imageList};
const imageModel1:ImageModel={key:'demoMovieName1',imageList:imageList1};
const imageModelList:ImageModel[]=[imageModel,imageModel1];

export const INITIAL_STATE: AppState = { 
    imageListWithKey:imageModelList,
    currentImageList:imageList
}