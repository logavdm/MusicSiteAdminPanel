import { Action } from 'redux';
import {Image} from "../../models/image";
export interface AddImageListToModel  extends Action{
    type:string;
    key:string;
    listImages:Image[];
}
