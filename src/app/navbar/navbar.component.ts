import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import constants from '../constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  appName: string = '';

  _connUser: any = null;

  constructor(private authService: AuthService) {
    if(authService.isLoggedIn) {
      const accessToken = localStorage.getItem(constants.jwtTokenName);
      if(accessToken !== null) {
      const decoded = constants.getDecodedAccessToken(accessToken);
      this.authService.getUserProfileByUsername(decoded.sub).subscribe((res) => {
        this._connUser = res;
      });
      }
    }
  }

  logout() {
    this.authService.doLogout()
  }
}