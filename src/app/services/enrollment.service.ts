import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';

import { catchError } from 'rxjs/Operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http:HttpClient) { }

  _url = '';

  enrollUser(user:User){
    //console.log(user);

    return this._http.post<any>(this._url, user)
                     .pipe(catchError(this.errorHandler));

  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }

}
