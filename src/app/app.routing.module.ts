import { NgModule } from '@angular/core';
import { InboxComponent } from './components/inbox/inbox.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'inbox', component: InboxComponent },
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  { path: '**', redirectTo: 'inbox' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}