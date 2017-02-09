import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { InboxComponent } from './components/inbox/inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
