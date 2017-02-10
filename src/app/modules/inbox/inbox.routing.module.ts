import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox.component';

const inboxRoutes: Routes = [
    { path: 'inbox', component: InboxComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(inboxRoutes)
    ],
    exports: [ RouterModule ]
})
export class InboxRoutingModule {}