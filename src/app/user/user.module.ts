import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LoginFormDialogComponent } from './login/login-form-dialog/login-form-dialog.component';
import { RegisterFormDialogComponent } from './register/register-form-dialog/register-form-dialog.component';
import { UserIsNotLoggedActivator } from './../guards/barrel';

export const UserRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [UserIsNotLoggedActivator] },
  { path: 'register', component: RegisterComponent, canActivate: [UserIsNotLoggedActivator] },
  // { path: 'profile', component: null }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule, // esto indica que vamos a user template driven form
    SharedModule,
    RouterModule.forChild(UserRoutes)
  ],
  entryComponents: [
    LoginFormDialogComponent,
    RegisterFormDialogComponent
  ],
  declarations: [RegisterComponent, LoginComponent, LoginFormDialogComponent, RegisterFormDialogComponent, ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
