import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraftsComponent } from './drafts.component';

const routes: Routes = [
  { path: 'drafts', component: DraftsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DraftsRoutingModule { }
