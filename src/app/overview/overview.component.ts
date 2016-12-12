import { Component } from '@angular/core';

import { AppState } from '../app.service';


@Component({
  selector: 'overview',  // <overview></meoverviewnu>
  providers: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./overview.component.scss'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './overview.component.html'
})
export class OverviewComponent {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Overview` component');
  }
}
