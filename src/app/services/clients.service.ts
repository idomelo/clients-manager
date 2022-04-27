import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Client } from '../model/client';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly  API = '/assets/clients.json';

  constructor(private httpCLient: HttpClient) { }

  list() {
    return this.httpCLient.get<Client[]>(this.API)
    .pipe(
      first(),
      delay(3000),
      tap(clients => console.log(clients))
    )
  }
}
