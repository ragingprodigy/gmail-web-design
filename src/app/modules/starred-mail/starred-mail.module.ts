import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarredMailRoutingModule } from './starred-mail-routing.module';
import { StarredMailComponent } from './starred-mail.component';

@NgModule({
  imports: [
    CommonModule,
    StarredMailRoutingModule
  ],
  declarations: [StarredMailComponent]
})
export class StarredMailModule { }
