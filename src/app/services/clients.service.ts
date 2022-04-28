import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../model/client';
import { first, Observable, tap } from 'rxjs';

const baseUrl = 'http://localhost:8081/api/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService{

  constructor(private httpCLient: HttpClient) { }

  list() {
    return this.httpCLient.get<Client[]>(baseUrl)
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
