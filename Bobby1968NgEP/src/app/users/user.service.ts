import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { tap } from 'rxjs/operators';


const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null| undefined = undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }


  login(data: {login: string; password: string}) {
    return this.http.post<IUser>(`${apiURL}/users/login`, data, { withCredentials: false })
      .pipe(
        tap((user) => this.user = user)
      );
  }

  logout() {
    return this.http.post<IUser>(`${apiURL}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.user = null)
      );
  }

  register(data: { name: string; email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/users/register`, data, { withCredentials: false })
      .pipe(
        tap((user) => this.user = user)
      );
  }

}
