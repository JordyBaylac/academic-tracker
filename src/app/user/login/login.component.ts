import { LoginFormDialogComponent } from './login-form-dialog/login-form-dialog.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  template: ''
})
export class LoginComponent implements OnInit, AfterViewInit{

  constructor(public _dialog: MdDialog,
              private _router: Router) {}

  ngAfterViewInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this._dialog.open(LoginFormDialogComponent);
    dialogRef.afterClosed().subscribe(loggedIn => {
      if (loggedIn) {
        this._router.navigate(['/academic/']);
      } else {
        this._router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
  }

}



