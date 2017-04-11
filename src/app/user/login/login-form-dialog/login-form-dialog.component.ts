import { IUser } from './../../user.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from '../../../shared/validation.service';
import { AuthService } from './../../../user/auth.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login-form-dialog',
  templateUrl: './login-form-dialog.component.html',
  styleUrls: ['./login-form-dialog.component.css']
})
export class LoginFormDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(  public dialogRef: MdDialogRef<LoginFormDialogComponent>,
                @Inject(FormBuilder) private formBuilder: FormBuilder,
                private _validationService: ValidationService,
                private _authService: AuthService) {}

  ngOnInit() {

    this.loginForm = this.formBuilder.group( {
        email: ['', [this._validationService.emailValidator]],
        password: []
    });

  }

  public login() {

    if (this.loginForm.valid) {
      const values = this.loginForm.value;
      console.log('Login user with values: ' + values);

      this._authService.doLogin( {
        email: values.email,
        password: values.password
      } as IUser).subscribe( result => {

        if (result) {
          console.log('usuario logeado correctamente (' + result + ')');
          this.dialogRef.close(true);
        } else {
          this.dialogRef.close(false);
          console.log('usuario no logeado');
        }


      });

    } else {
      console.log('invalido');
    }

  }

}
