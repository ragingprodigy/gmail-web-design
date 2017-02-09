import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { AppComponent } from './app.component';
import { InboxComponent } from './modules/inbox/inbox.component';

const appRoutes: Routes = [
  { path: 'inbox', component: InboxComponent },
  // { path: 'heroes', component: HeroListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
