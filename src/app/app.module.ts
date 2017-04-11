import {
  UserIsLoggedActivator,
  UserIsNotLoggedActivator,
  AcademicMouleActivator
} from './guards/barrel';
import { UserModule } from './user/user.module';
// import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    UserModule
  ],
  providers: [
    UserIsLoggedActivator,
    UserIsNotLoggedActivator,
    AcademicMouleActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
