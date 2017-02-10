import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

// Custom Modules
import { InboxModule } from './modules/inbox/inbox.module';
import { StarredMailModule } from './modules/starred-mail/starred-mail.module';
import { SentMailModule } from './modules/sent-mail/sent-mail.module';
import { DraftsModule } from './modules/drafts/drafts.module';
import { CustomLabelModule } from './modules/custom-label/custom-label.module';
import { TrashedMailModule } from './modules/trashed-mail/trashed-mail.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    HttpModule,
    InboxModule, StarredMailModule, SentMailModule,
    DraftsModule, CustomLabelModule, TrashedMailModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
