import { ControlMessagesComponent } from './control-message.component';
import { ValidationService } from './validation.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ControlMessagesComponent
  ],
  providers: [
    // {provide: JQUERY_TOKEN, useValue: jQuery}
    ValidationService
  ],
  exports: [
    MaterialModule,
    CommonModule,
    ControlMessagesComponent
  ]
})
export class SharedModule { }
