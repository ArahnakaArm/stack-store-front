import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from '../../services/cookie.service';
import { AuthenticationService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor (
        private router: Router,
        private authenticationService: AuthenticationService,
        private cookieService: CookieService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
        if (!this.cookieService.getCookie('_access_token') || this.cookieService.getCookie('_access_token') == '') {
            this.router.navigate(['auth/login']);
            return false;
          }
          else return true


      /*   const currentUser = this.authenticationService.currentUser();

        if (currentUser) {
      
            return true;
        }



        this.router.navigate(['auth/login'], { queryParams: { returnUrl: state.url } });
        return false; */
    }
}