import { RegisterFormDialogComponent } from './register-form-dialog/register-form-dialog.component';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  template: ''
})
export class RegisterComponent implements OnInit, AfterViewInit{

  selectedOption: string;

  constructor(public _dialog: MdDialog,
              private _router: Router) {}

  ngAfterViewInit() {
    this.openDialog();
  }

  openDialog() {
    let dialogRef = this._dialog.open(RegisterFormDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this._router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }

}




