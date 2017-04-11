import { Injectable } from '@angular/core';
import { AuthService } from './../user/auth.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { UserIsLoggedActivator } from './user-is-logged.activator';

/**
 * Indicate when the academic module can be loaded or not. Should be only allowed
 * for logged users.
 * @export
 * @class AcademicMouleActivator
 * @implements {CanActivate}
 */
@Injectable()
export class AcademicMouleActivator extends UserIsLoggedActivator {
}
