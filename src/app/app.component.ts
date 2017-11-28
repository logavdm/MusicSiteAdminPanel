import { Component } from '@angular/core';
import { NgRedux, select, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from './store/store';
import {INITIAL_STATE} from './config/init-config';
import { Observable } from 'rxjs/Observable';
import {AppState} from "./app-state/app-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ngRedux: NgRedux<AppState>,private devTools: DevToolsExtension){

    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      null,
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }

}
