import { Component } from '@angular/core';

import { AppState } from '../app.service';


@Component({
  selector: 'main-header',  // <main-header></main-header>
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./header.component.scss'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Header` component');
  }
}
