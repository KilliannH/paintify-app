import { Injectable } from '@angular/core';
import { User } from 'src/types/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import constants from './constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  
  constructor(private http: HttpClient, public router: Router) {}
  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post('/api/signup', user).pipe(catchError(this.handleError));
  }
  
  login(user: User) {
    return this.http
      .post<any>('api/login', user)
      .subscribe((res: any) => {
        localStorage.setItem(constants.jwtTokenName, res.token);
        this.getUserProfileById(res.id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['/dashboard']);
        });
      });
  }
  getToken() {
    return localStorage.getItem(constants.jwtTokenName);
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem(constants.jwtTokenName);
    return authToken !== null;
  }
  doLogout() {
    let removeToken = localStorage.removeItem(constants.jwtTokenName);
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }
  // User profile
  getUserProfileById(id: any): Observable<any> {
    return this.http.get('/api/users/' + id, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  getUserProfileByUsername(username: any): Observable<any> {
    return this.http.get('/api/users/username/' + username, { headers: this.headers }).pipe(
      map((res) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}