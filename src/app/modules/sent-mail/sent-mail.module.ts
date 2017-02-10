import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentMailRoutingModule } from './sent-mail-routing.module';
import { SentMailComponent } from './sent-mail.component';

@NgModule({
  imports: [
    CommonModule,
    SentMailRoutingModule
  ],
  declarations: [SentMailComponent]
})
export class SentMailModule { }
