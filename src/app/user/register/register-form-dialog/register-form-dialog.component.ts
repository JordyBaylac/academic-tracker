import { IUser } from './../../user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from '../../../shared/validation.service';

@Component({
  selector: 'app-register-form-dialog',
  templateUrl: './register-form-dialog.component.html',
  styleUrls: ['./register-form-dialog.component.css']
})
export class RegisterFormDialogComponent implements OnInit {

  registerForm: FormGroup;

  constructor(  public dialogRef: MdDialogRef<RegisterFormDialogComponent>,
                @Inject(FormBuilder) private formBuilder: FormBuilder,
                private _validationService: ValidationService) {}

  ngOnInit() {

    this.registerForm = this.formBuilder.group( {
        fullname: [],
        email: ['', [this._validationService.emailValidator]],
        password: ['', [Validators.minLength(6)]],
        check_password: ['', [Validators.minLength(6)]]
    });

  }

  // Angular material no es compatible con esto
  private isEqualTo(controls: FormControl[]): ((control: FormControl) => {})  {
    return (control: FormControl) => {
      let valid = false;
      const first = control.value;
      for (const c of controls) {
          const val = c.value;
          valid = valid && (val === first);
      }

      if (valid) {
        return null;
      }

      return {
        isEqualTo: true
      };
    };
  }

}

