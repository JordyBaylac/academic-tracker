import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-control-messages',
  template: `
    <em *ngIf="control.touched
          && control.dirty
          && errorMessage !== null">{{errorMessage}}</em>
  `
})
export class ControlMessagesComponent implements OnChanges {

  @Input() public control: FormControl;
  @Input() errors: {[key: string]: any};
  public errorMessage: string = null;

  constructor(private _validationService: ValidationService) { }

  ngOnChanges() {
    this.loadMessage();
  }

  private loadMessage() {
    for(let propertyName in this.errors) {
      if (this.errors.hasOwnProperty(propertyName)) {
        this.errorMessage = this._validationService.getValidatorErrorMessage(propertyName, this.errors[propertyName]);
        return;
      }
    }
    this.errorMessage = null;
  }
}
