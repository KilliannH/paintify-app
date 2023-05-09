import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  doLogout() {}
}
