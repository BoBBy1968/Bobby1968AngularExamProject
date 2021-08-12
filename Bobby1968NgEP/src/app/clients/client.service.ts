import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/client';

let apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: IClient | null| undefined = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  create(data: { firstName: string; lastName: string; egn: string; address: string }) {
    return this.http.post<IClient>(`${apiURL}/data/clients`, data)
      // .pipe(
      //   tap((client) => this.client = client)
      // );
  }

  getAllClients(){
    return this.http.get<IClient[]>(`${apiURL}/data/clients`);
  }

}
