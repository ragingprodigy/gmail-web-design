import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftsRoutingModule } from './drafts-routing.module';
import { DraftsComponent } from './drafts.component';

@NgModule({
  imports: [
    CommonModule,
    DraftsRoutingModule
  ],
  declarations: [DraftsComponent]
})
export class DraftsModule { }
