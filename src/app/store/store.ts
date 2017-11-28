import {Actions} from '../actions/action';
import { Action } from 'redux';
import {GetImageListAction} from "../actions/models/get-image-list-action";
import {AddImageListToModel} from "../actions/models/add-image-list-to-model";
import {AppState} from '../app-state/app-state';
import { ImageModel } from '../models/image-model';

export interface Store {
}
export function rootReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
     
     case Actions.GETIMAGELIST: 
     return { 
          imageListWithKey:state.imageListWithKey,
          currentImageList:state.currentImageList
          
      };

      case Actions.ADDIMAGELISTTOIMAGEMODEL:
      let AddimageListToModel=(<AddImageListToModel>action).listImages; 
      let AddImageModelArray:ImageModel[]=state.imageListWithKey;
      AddImageModelArray.push({imageList:(<AddImageListToModel>action).listImages,key:(<AddImageListToModel>action).key});
      return { 
           imageListWithKey:AddImageModelArray,
           currentImageList:AddimageListToModel
       };

       case Actions.GETIMAGELISTFROMMODEL:
       let GetimageListIndex=(<GetImageListAction>action).index; 
       return { 
            imageListWithKey:state.imageListWithKey,
            currentImageList:state.imageListWithKey[GetimageListIndex].imageList
        };
      
      default: return state;
    }
  }