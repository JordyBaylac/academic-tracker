import { Injectable } from '@angular/core';
import { AuthService } from './../user/auth.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserIsNotLoggedActivator implements CanActivate {

    constructor( private _authService: AuthService,
                private _location: Location) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      if (this._authService.userIsLogged()) {
        this._location.back();
        return Observable.of(false);
      } else {
        return Observable.of(true);
      }

    }

}
