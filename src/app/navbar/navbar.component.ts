import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
// import { JQUERY_TOKEN } from '../shared/jquery.service';
import { RouterLinkActive } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  // indicate when is safe to handle the router link active
  private routerLinkActiveIsSafe = false;
  /**
   * Mantiene la instancia del link activo. O sea, el link cuya ruta est'a
   * activada actualmente.
   * @type {RouterLinkActive}
   * @memberOf NavbarComponent
   */
  public currentLinkActive: RouterLinkActive = null;

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  public ngAfterViewInit() {
    this.routerLinkActiveIsSafe = true;
  }

  // helper para saber si un router link se activo.
  public isRouterLinkActive(rla: RouterLinkActive): boolean {
     if (this.routerLinkActiveIsSafe && rla.isActive) {
        return true;
     }
     return false;
  }

  /**
   * Deslogea al usuario en caso de que este logeado
   * @memberOf NavbarComponent
   */
  public signOut() {
    this._authService.doSignout().subscribe( signout => {

        if (signout) {
          console.log('usuario deslogeado correctamente (' + signout + ')');
          this._router.navigate(['/home']);
        } else {
          console.log('usuario no deslogeado');
        }

      });
  }


  public userIsLogged(): boolean {
    return this._authService.userIsLogged();
  }


}
