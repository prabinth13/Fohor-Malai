import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { catchError, map, tap } from 'rxjs/operators'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl = 'api/users';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      //TODO: send the error to remote logging infracture
      console.error(error); //log to console instead
      
      //TODO; better job of transforming error for user consimption
      console.log(`${operation} failed: ${error.message}`);

      //LET the app keep running by returning an empty result.
      return of (result as T);
    };
  }

  constructor(private http: HttpClient, private router: Router) { }

  signup(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/signup`, formData ).pipe(
      tap(user => {
        console.log(user);
      }),
      catchError(this.handleError('signup', []))
    );

  }


  login(formData: NgForm) {
    return this.http.post<any>( `${this.apiUrl}/login`, formData ).pipe(
      tap(user => {
        console.log(user);
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }),
      catchError(this.handleError('login', []))
    );

  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/Home']);
    }
  }

  isloggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
