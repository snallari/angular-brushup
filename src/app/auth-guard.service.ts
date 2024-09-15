import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  isLoggedIn:boolean=true
  constructor( private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    if(this.isLoggedIn){
      return true
    }else{
      this.router.navigate(['/pc'])
    }
  }

}
