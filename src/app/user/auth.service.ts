import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private currentUser: IUser = null;

  constructor() { }

  public userIsLogged(): boolean {
    return !!this.currentUser;
  }

  public userHasStudentRole(): boolean {
    return this.userIsLogged() && this.currentUser.roles.includes('STUDENT');
  }

  public userHasParentRole(): boolean {
    return this.userIsLogged() && this.currentUser.roles.includes('PARENT');
  }

  public doLogin( user: IUser ): Observable<boolean> {
    if (this.userIsLogged()){
      return Observable.of(false);
    }
    this.currentUser = {
      id: 'none',
      fullname: 'none-name',
      email: user.email,
      password: user.password,
      roles: ['']
    };
    return Observable.of(true);
  }

  public doSignout(): Observable<boolean> {
    if (!this.userIsLogged()) {
      return Observable.of(false);
    }
    this.currentUser = null;
    return Observable.of(true);
  }

}
