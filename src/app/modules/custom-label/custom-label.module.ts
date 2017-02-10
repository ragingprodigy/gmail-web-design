import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelRoutingModule } from './custom-label-routing.module';
import { CustomLabelComponent } from './custom-label.component';

@NgModule({
  imports: [
    CommonModule,
    CustomLabelRoutingModule
  ],
  declarations: [CustomLabelComponent]
})
export class CustomLabelModule { }
