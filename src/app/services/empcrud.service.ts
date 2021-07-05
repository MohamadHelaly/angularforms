import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/Operators';
import { throwError } from 'rxjs';
import { Employee } from '../Models/employee';



@Injectable({
  providedIn: 'root'
})
export class EmpcrudService {

  _url = 'https://localhost:44350/api/employee/';

  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get<any>(this._url + 'getall')
    .pipe(catchError(this.errorHandel));
  }

  update(emp:Employee){
    return this.http.put<Employee>(this._url + 'Update', emp )
                    .pipe(catchError(this.errorHandel));
  }

  Add(emp:Employee){
    return this.http.post<Employee>(this._url + 'Add', emp)
                    .pipe(catchError(this.errorHandel));
  }

  Delete(id:number){
    return this.http.delete<Employee>(this._url+ 'Delete/'+ id)
                    .pipe(catchError(this.errorHandel));
  }

  errorHandel(error: HttpErrorResponse){
    return throwError(error);
  }

}
