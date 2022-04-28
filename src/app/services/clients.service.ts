import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../model/client';
import { first, Observable, tap } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService{

  private readonly  API = 'api/clients';

  constructor(private httpCLient: HttpClient) { }

  list() {
    return this.httpCLient.get<Client[]>(this.API)
    .pipe(
      first(),
      tap(clients => console.log(clients))
    )
  }

  create(data: any): Observable<any> {
    return this.httpCLient.post(baseUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.httpCLient.delete(`${baseUrl}/${id}`);
  }
}
