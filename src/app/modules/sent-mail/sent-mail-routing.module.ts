import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentMailComponent } from './sent-mail.component';

const routes: Routes = [
  { path: 'sent', component: SentMailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SentMailRoutingModule { }
