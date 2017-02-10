import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrashedMailRoutingModule } from './trashed-mail-routing.module';
import { TrashedMailComponent } from './trashed-mail.component';

@NgModule({
  imports: [
    CommonModule,
    TrashedMailRoutingModule
  ],
  declarations: [TrashedMailComponent]
})
export class TrashedMailModule { }
