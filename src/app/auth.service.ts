import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo$ = new BehaviorSubject<any>(null);

  constructor() { }

  signIn(): Promise<any> {
    return Promise.resolve();
  }

  login(): Promise<any> {
    return Promise.resolve();
  }

  logout(): Promise<any> {
    return Promise.resolve();
  }
}