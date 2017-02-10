import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomLabelComponent } from './custom-label.component';

const routes: Routes = [
  { path: 'label/:name', component: CustomLabelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomLabelRoutingModule { }
