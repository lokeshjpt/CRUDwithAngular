import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { UserData } from './user-data';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiurl = 'api/users';


  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getUsers(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getUser (id: number): Observable<User> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }

//   initializeUser(): User{
//     return{
//       id: 0,
//       name: '',
//       age: ''
// }

//   }


  addUser (user: User): Observable<User> { 
    user.id=null;
    return this.http.post<User>(this.apiurl, user, this.httpOptions).pipe(
    tap(data => console.log(data)),
    catchError(this.handleError)
  );
}

updateUser(user: User): Observable<User>{
  const url = `${this.apiurl}/${user.id}`;
  return this.http.put<User>(this.apiurl, user, this.httpOptions).pipe(
    map(() => user),
    catchError(this.handleError)
  );
}



deleteCar (id: number): Observable<User> {
  const url = `${this.apiurl}/${id}`;
  return this.http.delete<User>(url, this.httpOptions).pipe(
    catchError(this.handleError)
  );
}


}