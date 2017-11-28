import {Image} from "../models/image";
import {ImageModel} from "../models/image-model";

export interface AppState {
    imageListWithKey:ImageModel[];
    currentImageList:Image[];
}
