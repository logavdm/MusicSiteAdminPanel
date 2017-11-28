import { Action } from 'redux';

export interface GetImageListAction extends Action {
    type:string;
    index:number;
}
