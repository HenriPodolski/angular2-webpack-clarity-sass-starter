import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview';
import { DetailComponent } from './detail';
import { NoContentComponent } from './no-content';


export const ROUTES: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**', component: NoContentComponent },
];
