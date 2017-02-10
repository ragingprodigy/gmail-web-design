import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Custom Modules
import { InboxModule } from './modules/inbox/inbox.module';
import { StarredMailModule } from './modules/starred-mail/starred-mail.module';
import { SentMailModule } from './modules/sent-mail/sent-mail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InboxModule, StarredMailModule, SentMailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
