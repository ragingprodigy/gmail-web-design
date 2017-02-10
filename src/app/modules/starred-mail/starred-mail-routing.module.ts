import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarredMailComponent } from './starred-mail.component';

const routes: Routes = [
  { path: 'starred-mail', component: StarredMailComponent },
  // { path: 'starred/:id', component: null }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StarredMailRoutingModule { }
