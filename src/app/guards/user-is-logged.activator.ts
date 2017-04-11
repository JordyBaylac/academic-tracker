import { Injectable } from '@angular/core';
import { AuthService } from './../user/auth.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserIsLoggedActivator implements CanActivate {

    constructor(private _authService: AuthService,
                private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

      if (this._authService.userIsLogged()) {
        return Observable.of(true);
      } else {
        this._router.navigate(['/user/login']);
        return Observable.of(false);
      }

    }

}
