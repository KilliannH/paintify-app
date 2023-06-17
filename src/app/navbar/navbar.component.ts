import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import constants from '../constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  appName: string = '';

  userInfoSubscritpion$: Subscription | null = null;
  _connUser: any = null;

  constructor(private authService: AuthService) {
    this.authService.currentUser$.subscribe((data) => {
      if(data) {
        this._connUser = data;
        console.log("logged in with user data: ", data);
      } else {
        this._connUser = null;
      }
    });
  }

  logout() {
    this.authService.doLogout();
  }
}